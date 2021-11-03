import {React,useState,Fragment} from 'react';
import { Tab } from '@headlessui/react'
import CreateCourse from './CreateCourse';
import Content from './Content';
import Home from './Home';


const Nav = () =>{
  const [value ,setValue] = useState(0);
  const [sideNav , setNav] = useState(false);

    return (
        <>

        <div className="absolute w-full flex-cols sm:px-0  md:block hidden">
        <Tab.Group>
            <div className="w-full ">
      <Tab.List className=" fixed inset-x-0 left-0   top-0 flex pl-8 ... p-2 space-x-8 bg-white shadow-xl  ">
        
      <span className="">
        <Tab disabled as={Fragment}  >
          <img src="CC LOGO PARAMESH.png" className="w-50 h-16" alt="cc" />
          
        </Tab></span>
          
          
          <span className="pt-2 ...">
        <Tab as={Fragment}  >
          {({ selected }) => (
          <button
              className={`px-5 py-3 hover:text-green-500  text-sm leading-5 font-medium text-green-500 rounded-lg ... focus:outline-none focus:ring-2  ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 
              ${ (selected )? "bg-white shadow text-green-500 " : ""}`}
            >
                HOME     
            </button>
          )}
        </Tab></span>
        <span className="pt-2 ...">
        <Tab as={Fragment}  >
          {({ selected }) => (
          <button
          className={`px-5 py-3 hover:text-green-500  text-sm leading-5 font-medium text-green-500 rounded-lg focus:outline-none focus:ring-2  ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 
              ${ (selected )? "bg-white shadow text-green-500 " : ""}`}
            >
                DISPLAY COURSE     
            </button>
          )}
        </Tab></span>
        <span className="pt-2 ...">
        <Tab as={Fragment}  >
          {({ selected }) => (
          <button
          className={`px-5 py-3 hover:text-green-500  text-sm leading-5 font-medium text-green-500 rounded-lg focus:outline-none focus:ring-2  ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60 
              ${ (selected )? "bg-white shadow text-green-500 " : ""}`}
            >
                CREATE COURSE    
            </button>
          )}
        </Tab>
       </span>
       
      
      </Tab.List>
      </div>
      <div className=" bg-green-300  p-8 ">
      <Tab.Panels>
        <Tab.Panel>nothing</Tab.Panel>
        <Tab.Panel> <div className="p-8 h-screen"><Home/></div> </Tab.Panel>
        <Tab.Panel><span  className="p-8 h-screen"><Content/></span> </Tab.Panel>
        <Tab.Panel>
            <CreateCourse/>
             </Tab.Panel>
      </Tab.Panels>
      </div>
    </Tab.Group>    
        </div>
        
         
        <div className=" transform duration-400 ease-in-out block md:hidden flow-root h-20 w-full bg-white
          shadow-md fixed inset-x-0 left-0   top-0  ">
           <span className="float-left pt-1 ..."><img src="CC LOGO PARAMESH.png" className="w-50 h-16" alt="cc" /> </span>
           <span className=" p-7  float-right">
           <button className=" focus:outline  " >
                             <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>{setNav(true)}} class={`h-6 w-6 text-green-500 ${(!sideNav)?"block":"hidden"}` } fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                             </svg> 
                             <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>{setNav(false)}} class={`h-6 w-6 text-green-500 ${(sideNav)?"block":"hidden"}` } viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
                             </button>

           </span>
        </div>
      <div className={`${sideNav ? "block":"hidden"} pt-8 ...  absolute bg-green-300 
                        fixed inset-y-0 inset-x-0 top-0 left-0 md:w-1/3 sm:2/3 w-3/4    
                      transition duration-300 ease-in-out divide-y-4 divide-opacity-85 border-r-4  border-white  divide-white p-2  h-full`}>
             <div className=" p-2 text-white text-xl font-black font-serif .. ">
               <span>COURSE CORNER</span>
             </div>
             <div className="pt-4 ...">
              <span className="text-base text-white text-semibold font-mono ... ">
               <li onClick={(e)=>{setValue(0); setNav(false)}}
                className={` ${(value==0)?"bg-white text-green-500":""} hover:bg-white hover:text-green-500 rounded px-4 py-2.5 cursor-default block`}>HOME</li>
               <li onClick={(e)=>{setValue(1);setNav(false)}}
               className={`${(value==1)?"bg-white text-green-500":""} hover:bg-white hover:text-green-700 rounded px-4 py-2.5 cursor-default block`}>DISPLAY COURSE</li>
               <li onClick={(e)=>{setValue(2);setNav(false)}}
                className={`${(value==2)?"bg-white text-green-500":""} hover:bg-white hover:text-green-700 rounded px-4 py-2.5 cursor-default block`}>CREATE COURSE</li>
               </span>
               </div>
      </div>
      
      <div className="block  md:hidden bg-green-300 p-8 ">
           <div className={` p-8 h-screen  ${value==0 ? "block":"hidden"}`}>
             <Home/>
           </div>
           <span className={` pt-8 ... h-screeen ${value==1 ? "block":"hidden"}`}>
             <Content/>
           </span>
           <div className={`${value==2 ? "block":"hidden"}`}>
             <CreateCourse/>
           </div>



        
        
        </div>

        
        
        </>
    );
}



export default Nav;