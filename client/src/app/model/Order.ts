export interface Order {
    id:              number;
    buyerId:         string;
    shippingAddress: ShippingAddress;
<<<<<<< HEAD
    orderDate:       string; //เปลี่ยนจาก Date เป็น string เพราะส่งมาเป็น json string 
=======
    orderDate:       String;  //เปลี่ยนจาก Date เป็น string เพราะส่งมาเป็น json string เดี๋ยวจะใช้ไม่ได้
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
    orderItems:      OrderItem[];
    subtotal:        number;
    deliveryFee:     number;
    orderStatus:     string;
    total:           number;
}
<<<<<<< HEAD
 
=======

>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
export interface OrderItem {
    productId:  number;
    name:       string;
    pictureUrl: string;
    price:      number;
    quantity:   number;
}
<<<<<<< HEAD
 
=======

>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
export interface ShippingAddress {
    fullName: string;
    address1: string;
    address2: string;
    city:     string;
    state:    string;
    zip:      string;
    country:  string;
}
