import React from 'react';

const Cart = (props) => {
      const cart = props.cart
      const total = cart.reduce((total, course)=>total +course.fees,0)
      return (
            <div>
                  <h1>Enroll Course Details</h1>
                  <h1>Total Enroll : {cart.length}</h1>
                  <h5>Total Fees : {total}</h5>
            </div>
      );
};

export default Cart;