import axios, { AxiosError, AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { history } from "../../main";
// import { history } from "../..";
 
//เป็น Service สำหรับติดต่อกับ Server
 
axios.defaults.baseURL = "http://localhost:5000/api/"
axios.defaults.withCredentials = false; //อนุญาตให้เข้าถึงคุกกี้ที่ browser ได้
 
const sleep = () => new Promise(resolve => setTimeout(resolve, 500)); //delay
 
const responseBody = (response: AxiosResponse) => response.data;
 
//You can intercept requests or responses before they are handled by then or catch.
//.use มี Promise คือ onFullfill กรณีสำเร็จ onReject กรณีมีข้อผิดพลาด
axios.interceptors.response.use(async response => {
    await sleep()
    return response
}, (error: AxiosError) => {
    console.log('caught by interceptor')
    const { data, status } = error.response!
    var json = JSON.stringify(data)
    var result = JSON.parse(json) //แปลงเป็น object
 
    switch (status) {
    //// switch (result.status) {
    
        case 400:
            //ตรวจสอบค่าที่ส่งมาจาก GetValidationError()
            if (result.errors) {
                const modelStateErrors: string[] = [];
                for (const key in result.errors) {
                    if (result.errors[key]) {
                        modelStateErrors.push(result.errors[key])
                    }
                }
                throw modelStateErrors.flat();

            }
            toast.error(result.title);
            break;
        case 401:
            toast.error(result.title || 'Unauthorized');
            break;
        case 403:
            toast.error('You are not allowed to do that!');
            break;
        case 500:
            history.push('/server-error', { state: data })
 
            toast.error(result.title);
            break;
        default:
            break;
    }
 
    return Promise.reject(error.response) //ส่งไปให้ catch(error) นำไปใช้ได้เลย
})
 
const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body?: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}
 
const TestErrors = {
    get400Error: () => requests.get('Buggy/GetBadRequest'),
    get401Error: () => requests.get('Buggy/GetUnAuthorized'),
    get404Error: () => requests.get('Buggy/GetNotFound'),
    get500Error: () => requests.get('Buggy/GetServerError'),
    getValidationError: () => requests.get('Buggy/GetValidationError'),
}
 
const Catalog = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`),
}

const Basket = {
    get: () => requests.get('basket'),
    addItem: (productId: number, quantity = 1) => requests.post(`Basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId: number, quantity = 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`)
}
 
const agent = {
    TestErrors,
    Catalog,
    Basket
}
 
export default agent;
