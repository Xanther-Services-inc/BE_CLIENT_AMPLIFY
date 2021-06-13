import React, { useLayoutEffect } from 'react'
import Header1 from '../../Header1'
import Footer1 from '../../Footer1'
const OrderSuccess = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      });

    return (
        <main>
        <Header1 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
        <h1>Thank you for the purchase.. We'll get back to you soon..</h1>
        </div>
        <Footer1 />
        </main>
    )
}

export default OrderSuccess