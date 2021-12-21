import {React,Fragment ,useState,useEffect} from 'react';
import ReactPlayer from 'react-player';
import List from './List';
import CheckboxGroup from 'react-checkbox-group'





const Content =()=>
{
    const [lang, setlang] = useState([])
    const [filtered,setfiltered]=useState([]);
    const [contents,setContents]=useState([]);
    const [con,setCon]=useState([]);
   const [search,setSearch] = useState('');
   const [checkbox,setcheckbox] =useState(false);
   const updateSearch = e =>
   {
       setSearch(e.target.value);
       if(search!= "")
       {
        var d = contents.filter(checkdata);
        setCon(d);
        function checkdata(e)
        {
           return Object.values(e).join(" ").toLowerCase().includes(search.toLowerCase());
        }
    }else
    {
        setCon(contents);
    }
   }  
   const ApplyFilter = () =>
   {
           var x = filtered.filter((e)=>
           {
               return (lang.some(function(l){
                   return l == e['lang']
               }));
           })
           setContents(x);
           setCon(x);
           setcheckbox(false);
   }
    const updateContents = async()=>{
             const data = await fetch('http://localhost:5000/getcourse');
             const d = await data.json();
             setContents(d);
             setCon(d);
             setfiltered(d);
            
    }
    useEffect(()=>{
        
        updateContents();

    },[])
    return(
        <>
        <Fragment className="h-screen" >
        <div className=" pt-8 ... mt-3 ...  ">  
        <div className={`grid justify-items-center ... fixed inset-x-0 left-0  ${checkbox ? "block":"hidden"}`}>
  <div className=" border-2 border-green-500 shadow-md sm:w-2/4  md:w-2/5 lg:w-1/3 rounded-lg ... h-full bg-white  w-54">
      <div className="p-1 pr-4 ... pl-4 ...">
      <div className="grid grid-cols-1 divide-y-3  divide-green-500">
         <div className="p-2 pb-3 ...">
            <span className="float-right transform hover:scale-110 duration-500 ease-in-out">
             <button onClick={(e)=>{setcheckbox(false)}}><svg xmlns="http://www.w3.org/2000/svg" class=" h-5 w-5  text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  </button>
                  </span>
              
              <span className=" text-center text-semibold text-green-600">Apply Filter</span>
             
                 
          </div>  
          
         <div className="pt-2 ...">
         <CheckboxGroup name="languages" value={lang} onChange={setlang}>
          {(Checkbox) => (
              <div className=" p-2 flex space-x-2 ... sm:space-x-4 ... lg:space-x-6 ... divide-x-2 divide-green-500 ">
              <div className="flex-cols font-serif ...">
                  <div className = "p-4 hover:text-green-600 font-semi-bold"><Checkbox value="C" /> C</div>
                  <div className = "p-4 hover:text-green-600 font-semi-bold"> <Checkbox value="Cpp" /> Cpp</div>
              <div className = "p-4 hover:text-green-600 font-semi-bold"> <Checkbox value="Python" /> Python</div>
              </div>
              <div className="flex-cols">
              <div className = "p-4 hover:text-green-600 font-semi-bold"> <Checkbox value="C#" /> C#</div>
              <div className = "p-4 hover:text-green-600 font-semi-bold"> <Checkbox value="JAVA" /> JAVA</div>
              <div className = "p-4 hover:text-green-600 font-semi-bold"> <Checkbox value="JS" /> JS</div>
              </div>
              <div className="flex-cols">
              <div className = "p-4 hover:text-green-600 font-semi-bold"> <Checkbox value="NodeJs" /> NodeJs</div>
              <div className = "p-4 hover:text-green-600 font-semi-bold"> <Checkbox value="ReactJs" /> ReactJs</div>
              <div className = "p-4 hover:text-green-600 font-semi-bold"> <Checkbox value="HTML" /> HTML</div>
              </div>
              </div>
 
)}
</CheckboxGroup>

<div className=" sm:p-3 grid justify-items-center ...">
               <div>
                <input type="button" onClick={ApplyFilter}
                 className="px-5 py-2 transform hover:scale-110 duration-400 ease-in-out
                rounded-md block bg-green-400  text-white " 
                value="APPLY"/>
            </div>
            </div>
              

             </div>      
      </div>
      </div>   
  </div>
  </div>
        <div className="  grid justify-items-end ... ">
        <div className="pr-4 ...">
        <div className=" flex space-x-2 ...">
        <div className="text-white  font-serif ...">Filter</div>
                <div>
                <button onClick={(e)=>{setcheckbox(true)}}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>  
                </button>
                    </div>
                
        </div>
        
       </div>
        <div className="">  
        
                    <div className="p-1  left-0 ">   
                    <div className="mx-auto text-gray-600  ">
                                    <input  value={search} 
                                onChange={updateSearch}
                                className="shadow-md  border-2 border-gray-300 focus:border-white
                                    focus:ring-2 focus:ring-green-400 bg-white h-10 px-5 pr-2  
                                    rounded-lg text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search"/>
                    
                    </div>
      </div>
      </div>
      </div>
      <div className="mt-4 ... pr-0  sm:pr-8 ...">
            <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  space-around">
        {con.map(content =>(
              <List  title={content['title']} des={content['description']}  url = {content['url']} trans = {checkbox}/>
              
            ))}
            </div>
            </div>
            </div>
        </Fragment>

        </>
    );
}

export default Content;
