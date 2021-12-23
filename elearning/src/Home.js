

import {React,useState,useEffect} from 'react';
import Content from './Content'






function Home() {
 const [open,setopen] = useState(false);
 

  return(
    <>
    <>
    <div className={`pt-8 ... ${!open ? "block":"hidden"}`}>
      <div className=" pt-8 ... sm:pr-8 ... sm:pl-8 ... flex items-center justify-center ">
        <div className="p-0 sm:p-8  w-full xl:w-4/5 h-full xl:h-screen  bg-white md:shadow-lg rounded-lg ... xl:flex grid">
        <div className=" xl:p-0 sm:p-8 p-6 w-full xl:w-1/2 ">
                   <img src="home.jpeg" className=" rounded w-full h-full" alt="Oops"/>
               </div>
               <div className=" p-4 sm:p-2 xl:p-6 w-full xl:w-1/2 h-full  text-2xl sm:flex  sm:justify-center ">
                   <div className="w-full sm:w-3/4">
                       <span className="text-3xl font-black">
                          Your Course to Success
                       </span>
                       <br>
                       </br>
                       <span className="text-lg font-semibold">
                         Build your skills with programming courses 
                       </span>
                       <br>
                       </br>
                       <br>
                       </br>
                       <div className="">
                          <button onClick={(e)=>{setopen(true)}} className="  h-10 p-1 sm:h-14 sm:p-2  rounded border-2 border-green-300  hover:bg-white hover:text-green-300  bg-green-300 text-white">Learn courses</button>
                         </div>
                       
                   </div>
                   </div>
        </div>
      </div>
    </div>

    <div className={`bg-green-300 ${open ? "block":"hidden"}`}>
      <Content/>
    </div>
    </>

    </>
  );
}

export default Home;
