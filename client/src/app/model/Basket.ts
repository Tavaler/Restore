export interface Basket {
<<<<<<< HEAD
    id:      number;
    buyerId: string;
    items:   BasketItem[];
    paymentIntentId?: string;
    clientSecret?: string;

=======
  id: number;
  buyerId: string;
  items: BasketItem[];
  paymentIntentId?: string;
  clientSecret?: string;
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
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
