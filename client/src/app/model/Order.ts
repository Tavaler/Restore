export interface Order {
    id:              number;
    buyerId:         string;
    shippingAddress: ShippingAddress;
<<<<<<< HEAD
    orderDate:       string; //เปลี่ยนจาก Date เป็น string เพราะส่งมาเป็น json string 
=======
    orderDate:       String;  //เปลี่ยนจาก Date เป็น string เพราะส่งมาเป็น json string เดี๋ยวจะใช้ไม่ได้
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
    orderItems:      OrderItem[];
    subtotal:        number;
    deliveryFee:     number;
    orderStatus:     string;
    total:           number;
}
<<<<<<< HEAD
 
=======

>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
export interface OrderItem {
    productId:  number;
    name:       string;
    pictureUrl: string;
    price:      number;
    quantity:   number;
}
<<<<<<< HEAD
 
=======

>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
export interface ShippingAddress {
    fullName: string;
    address1: string;
    address2: string;
    city:     string;
    state:    string;
    zip:      string;
    country:  string;
<<<<<<< HEAD
}
=======
}
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
