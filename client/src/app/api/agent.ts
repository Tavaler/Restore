import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { history } from "../..";
import { PaginatedResponse } from "../model/pagination";
import { store } from "../store/configureStore";

axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.withCredentials = true; //อนุญําตให้เข้ําถึงคุกกี้ที่ browser ได้

const ResponseBody = (response: AxiosResponse) => response.data;

const sleep = () => new Promise((_) => setTimeout(_, 500));


//แนบ token ไปกับ Header
axios.interceptors.request.use((config: any) => {
  const token = store.getState().account.user?.token; //เรียกใช้ State โดยตรง
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
})


//You can intercept requests or responses before they are handled by then or catch.
//.use มี Promise คือ onFullfill กรณีสำเร็จ onReject กรณีมีข้อผิดพลาด
axios.interceptors.response.use(async response => {
 
  //if(process.env.NODE_ENV === 'development') await sleep()

  await sleep()

  //ส่งค่ามาจากฝั่ง API Response.AddPaginationHeader(products.MetaData); 
    const pagination = response.headers['pagination']; //ส่งมาจาก ProductController
    if (pagination) {
        response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
        return response;
    }
    
    return response;
  },
  (error: AxiosError) => {
    var data = error.response?.data; //opj ที่ไม่รู้ชนิด
    var json = JSON.stringify(data);
    var result = JSON.parse(json); //เเปลงเป็น opj

    switch (result.status) {
      case 400:
        if (result.errors) {
          const modelStateErrors: string[] = [];
          for (const key in result.errors) {
            if (result.errors[key]) {
              modelStateErrors.push(result.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }

        toast.error(result.title);
        break;
      case 401:
        toast.error(result.title);
        break;
      case 404:
        toast.error(result.title);
        break;
      case 500:
        history.push("/server-error",{state:data})
        toast.error(result.title);
        break;

      default:
        break;
    }
  }
);




//params?: URLSearchParams ใช้รับค่าพารามิเตอ์แบบออบเจคที่มีหลายๆค่า เทีบบเท่า query string
const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(ResponseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(ResponseBody),
    // put: (url: string, body: {}) => axios.put(url, body).then(ResponseBody),
    delete: (url: string) => axios.delete(url).then(ResponseBody),
 
}
 
const Catalog = {
    list: (params: URLSearchParams) => requests.get('products', params),
    details: (id: number) => requests.get(`products/${id}`),
    fetchFilters: () => requests.get('products/filters'),
}


const TestErrors = {
  get400Error: () => requests.get("buggy/GetBadRequest"),
  get401Error: () => requests.get("buggy/GetUnAuthorized"),
  get404Error: () => requests.get("Buggy/GetNotFound"),
  get500Error: () => requests.get("buggy/GetServerError"),
  getValidationError: () => requests.get("buggy/GetValidationError"),
};

const Basket = {
  get :()=>requests.get('basket'),
  addItem : (productId:number,quantity=1)=>requests.post(`basket?productId=${productId}&quantity=${quantity}`,{}),
  removeItem : (productId:number,quantity=1)=>requests.delete(`basket?productId=${productId}&quantity=${quantity}`)

}

const Account = {
  login: (values: any) => requests.post('account/login', values),
  register: (values: any) => requests.post('account/register', values),
  currentUser: () => requests.get('account/currentUser'),
}


const agent = {
  Catalog,
  TestErrors,
  Basket,
  Account
};

export default agent;
