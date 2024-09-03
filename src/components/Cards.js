import React, { useState } from 'react'
import Card from './Card'

const Cards =(props) => {
    let courses=props.courses;
    //why this fxn?
        //when api is hit and data(named 'courses') is transferred/received
        //every object of course or data of cards is being sperately pushing
        //inserting the data in the array named allCourses
        let category=props.category;
        const[likedCourses,setLikedCourses]= useState([]);
    function getCourses(){
        if(category==="All"){
            let allCourses=[];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            });
        });
        return allCourses;

        } 
        else{
            //i will pass the data of specific category/array
            return courses[category];
        }
        
        
    }
   return (

      
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        //for every course we are making card to do this 
        //we have used map function
        getCourses().map( (course) =>  {
            return ( <Card key={course.id}
             course={course} 
             likedCourses={likedCourses} 
             setLikedCourses={setLikedCourses} />)
        })
      }

      </div>
      

   );


};

export default Cards;