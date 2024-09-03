import React from 'react'

const Filter =(props) => {
    let filterData=props.filterData;
     let category=props.category;
    let setCategory=props.setCategory;
    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {   //for multiple data we use map function
            filterData.map((data)=> (
    //har data k liye data chahiye..jo bhi data k title hoga wo button ka text ho jayega

    <button 
      className={`text-lg px-2 py-1 rounded-md font-medium
       text-white
       bg-black hover:bg-opacity-50 border-2 
        transition-all duration-300
        ${category===data.title ?   //we are doing this for the buttons highlighting part
         "bg-opacity-60 border-white" : 
          "bg-opacity-40 border-transparent" }
        `}
                
                key={data.id}
                //filterhandler making one fxn bcoz on clicking every button
                //i.e,.dev,design it is giving something to us
                onClick={()=> filterHandler(data.title)} 
                >{data.title}</button> 

            )) 
        }

        </div>
    )
}
export default Filter
