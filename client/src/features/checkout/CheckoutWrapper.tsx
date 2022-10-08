import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
import agent from "../../App/api/agent";
import LoadingComponent from "../../App/layout/LoadingComponent";
import { useAppDispatch } from "../../App/store/configureStore";
import { setBasket } from "../basket/basketSlice";
<<<<<<< HEAD
import CheckoutPage from "./checkoutPage";

//public key from stripe
const stripePromise = loadStripe(
  "pk_test_51Lq9uJEhKkYNz239UQcHf26fvjIViT4XGG1kuMxIDbxItBXVnUsKlEgZuwaaJHBf1WH7ehf743sqtaE5GRrrWcN700JtaAWxsR"
);

=======
import CheckoutPage from "./CheckoutPage";
//public key from stripe
const stripePromise = loadStripe(
  "pk_test_51Lq9tqEpzZ6PYoxXclG2JKSKO7yYZqAajCnw4MQcEB6NOWS2rMQlgwZkYIUeNnniiFPd0qhVEhy0kmO9c7HG9fwd00LiAcQu46"
);
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
  //สร้างหรืออัพเดทใบสั่งซื้อส่งไปยัง Stripe (incomplete)
=======
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  useEffect(() => {
    agent.Payments.createPaymentIntent()
      .then((basket) => dispatch(setBasket(basket)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <LoadingComponent message="Loading checkout..." />;
<<<<<<< HEAD

=======
  
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
