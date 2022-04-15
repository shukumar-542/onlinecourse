import React, { useEffect, useState } from 'react';
import data from '../../data/data.json'
import Cart from '../Cart/Cart';
import Subject from '../Subject/Subject';
import './Course.css'

const Course = () => {
      const [subjects, setSubject] = useState([])
      useEffect(()=>{
            setSubject(data)
            // console.log(data);
      },[])
      const [cart , setCart] = useState([])
       const handleEnroll = (sub)=>{
            const newCart = [...cart, sub]
            setCart(newCart)
       }
      return (
            <div className='course'>
                  <div className='subject-container'>
                  {
                        subjects.map(sub => <Subject sub={sub} handleEnroll={handleEnroll}></Subject>)
                  }
                  </div>
                  <div className='cart-container'>
                       <Cart cart ={cart}></Cart>
                  </div>
            </div>
      );
};

export default Course;