import React from 'react';
import './Subject.css'
import { Button,Card } from 'react-bootstrap';

const Subject = (props) => {
      console.log(props);
      const {course,instructor,fees} = props.sub
      return (
            <div className='subject'>
                 <h1>Course Name: {course}</h1> 
                 <p>Course Fees : ${fees}</p>
                 <p> Teachers : {instructor}</p>

                
                 <Button onClick={()=>props.handleEnroll(props.sub)}>Enroll Now</Button>
                 
            </div>
      );
};

export default Subject;