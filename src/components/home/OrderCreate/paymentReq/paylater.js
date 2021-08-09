import axios from "axios";

export const paylater = async (
  price,
  product_id,
  imageData,
  values,
  steps,
  email
) => {
  const userInfo = localStorage.getItem("userInfo");
  console.log(price, product_id, imageData, values, steps, email);
  const data = {
    payment: "Due",
    payment_id: "NA",
    email,
    product_id,
    price,
    image: imageData,
    order_data: values,
    order_steps: steps,
  };
  const result = await axios.post(
    `${process.env.REACT_APP_API}/api/v1/order`,
    data,
    {
      headers: {
        Authorization: `Bearer ${userInfo ? userInfo.token : ""}`,
      },
    }
  );
};
