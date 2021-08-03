import React, { useLayoutEffect } from "react";
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import { Row, Col } from "antd";
import "./OrderSuccess.css";
const OrderSuccess = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main>
      <Header1 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="order-container">
        <div className="printer-top"></div>

        <div className="paper-container">
          <div className="printer-bottom"></div>

          <div className="paper">
            <div className="main-contents">
              <div className="success-icon">&#10004;</div>
              <div className="success-title">Order Success</div>
              <div className="success-description">
                We received your purchase request; we'll be in touch shortly!
              </div>
              {/* <div className="order-details">
                <div className="order-number-label">Order Number</div>
                <div className="order-number">123456789</div>
              </div> */}
              <div className="order-footer">Thank you!</div>
            </div>
            {/* <div className="jagged-edge"></div> */}
          </div>
        </div>
      </div>
      {/* <Footer1 /> */}
    </main>
  );
};

export default OrderSuccess;
