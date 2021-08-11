import { loadScript } from "./loadScript";
import axios from "axios";
import swal from "sweetalert";

export const displayRazorpay = async (
  price,
  product_id,
  imageData,
  values,
  steps,
  email
) => {
  const userInfo = localStorage.getItem("userInfo");
  //   console.log(JSON.stringify(userInfo)["token"]);
  //   console.log(jwt_decode(userInfo.token));
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load, are you online?");
    return;
  }

  // creating a new order
  const result = await axios.post(
    `${process.env.REACT_APP_API}/api/v1/order/pay`,
    {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        price: price,
      },
    }
  );
  if (!result) {
    alert("server error! are you online?");
    return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: "rzp_live_lPfNA0qxI1YVUt",
    amount: amount.toString(),
    currency: currency,
    name: "Xanther Services",
    description: "",
    order_id: order_id,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };
      const dataa = {
        email,
        product_id,
        price,
        image: imageData,
        order_data: values,
        order_steps: steps,
        data,
      };
      const result = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/order/success`,
        dataa,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      console.log(result);
      // alert(result.data.msg);
      swal("Payment Success", "Payment Done Successfully!", "success");
      window.location.pathname = "/order-success";
    },

    // prefill: {
    //   name: "Mritunjoy Mahanta",
    //   email: "joymhnt@gmail.com",
    //   contact: "9999999999",
    // },
    notes: {
      address: "Xanther services",
    },
    theme: {
      color: "#61dafb",
    },
  };

  const paymentObject = new window.Razorpay(options);

  paymentObject.open();
};
