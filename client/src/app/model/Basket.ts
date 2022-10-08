export interface Basket {
<<<<<<< HEAD
  id:      number;
  buyerId: string;
  items:   BasketItem[];
  paymentIntentId?: string;
  clientSecret?: string;

}

export interface BasketItem {
  productId:  number;
  name:       string;
  price:      number;
  pictureUrl: string;
  brand:      string;
  type:       string;
  quantity:   number;
}
=======
  id: number;
  buyerId: string;
  items: BasketItem[];
  paymentIntentId?: string;
  clientSecret?: string;
}

export interface BasketItem {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
}
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
