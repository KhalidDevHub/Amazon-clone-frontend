import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { ClipLoader } from "react-spinners";
import { db } from "../../utility/firebase";
import { axiosInstance } from "../../Api/axios";
import { useNavigate } from "react-router-dom";
import { Type } from "../../utility/action.type";
const Payments = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  //   // console.log(user);
  const [loading, setLoading] = useState(false);
  const [cardError, setCardError] = useState("");
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const totalPrice = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  const paymentHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // step-1 function contact to client secret key
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${totalPrice * 100}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      // step-2 client side confirmation
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      // console.log(paymentIntent);
      // step-3 after confirmation   --->order fire-store database save clear basket
      await db
        .collection("user")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      // console.log(db);
      dispatch({ type: Type.EMPTY_BASKET });
      setLoading(false);
      navigate("/orders", { state: { msg: "You have placed new order" } });
    } catch (error) {
      console.log("Error writing document:", error);
      setLoading(false);
    }
  };
  return (
    <Layout>
      {/* header */}
      <div className={classes.payment_header}>Checkout ({totalItem})items</div>
      {/* payment method */}
      <section className={classes.Payment}>
        {/* Address */}
        <div className={classes.flex}>
          <h3>Delivery address</h3>
          <div>
            <div>{user?.email}</div>
            <div>1234 react</div>
            <div>Harar, Ethiopia </div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review item and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* cart form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.Payment_card_container}>
            <div className={classes.payment_detail}>
              <form onSubmit={paymentHandler}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* cardElement  */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p>{" "}
                      <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>

                  <button type="submit">
                    {loading ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please wait</p>
                      </div>
                    ) : (
                      "Buy Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payments;
