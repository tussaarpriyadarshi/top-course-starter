import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data"; 
//why importing apiUrl..when api hit it will give the data of course
//so we will use useEffect .it helps in dom,api call etc
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";




const App =() =>{


   //for api,use a async function

const[courses,setCourses]=useState(null);
const[loading,setLoading]=useState(true); //till the data reach/fetch after api hit...show one spinner.that why we are putting setLoading (true) in async fxn
//but when we have received the data we will have to stop showing the spinner
//so now setLoading as false
const [category,setCategory]=useState(filterData[0].title);
//now for default value we want to show the all cate.
//thats why we have selected the filter data ke first value


async function fetchData(){
  setLoading(true);

 try{
   let response=await fetch(apiUrl);
   //create one output var so that u can store the response format
   let output=await response.json();
   //now copy all the data in courses
   setCourses(output.data);
   

 }
 catch(error){
   toast.error("Network me koi prblm hai");

 }
 setLoading(false);  //hiding the spinner

}
//now call this function
useEffect(()=> {
  fetchData();
},[])




  return (
    <div className="min-h-screen flex-col bg-bgDark2">
       <div>
      <Navbar/>
    </div>
    <div className="bg-bgDark2">
     
    <div>
      <Filter filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
    </div>

    <div className="w-11/12 max-w-[1200px] mx-auto 
    flex  flex-wrap   justify-center 
    items-center min-h-[50vh]">
      {
        //so first here there was a Cards components
        //but it depends either we weant to show the Cards or 
        //spinner.so it depends on the condition of loading
        //if it is true show spinner if not then show Cards
        //now to make the cards we ll have to pass the data of card that why we 
        //passed the data in <Cards courses={courses}
        //now use props in Cards and make one function getCourses
    

        loading ?(<Spinner/>) : (<Cards courses={courses} category={category}/>)
      }
    </div>
    



    </div>



    
   


    </div>
   
   
  );
};


export default App;