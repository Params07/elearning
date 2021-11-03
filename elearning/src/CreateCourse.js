import {React,useState,Fragment} from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react';
import ReactPlayer from 'react-player';

const lang = [
    { name: 'C#' },
    { name: 'Python' },
    { name: 'C' },
    { name: 'JS' },
    { name: 'JAVA' },
    { name: 'Cpp' },
    {name:'NodeJs'},
    {name:'ReactJs'},
    {name:'HTML'}
  ]

const CreateCourse = ()=>
{   const [selected, setSelected] = useState(lang[0])
    const [title,setTitle] = useState('');
    const [description,setdescrip] = useState('');
    const [url,setUrl] = useState('');
    const[YTurl,setYTurl] = useState('');
    const [error,SetError] = useState(false)
    
    const updateTitle = e =>
    {
        setTitle(e.target.value);
    }
    const updateDes = e =>
    {
        setdescrip(e.target.value);
    }
    const updateUrl = e =>
    {   let x = e.target.value
        var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if(x.match(p)){
            setYTurl(x);
            SetError(true);
        }
        else{
            SetError(false);
        }
        setUrl(x);

       
    }
   

    const create = async(e) =>
    {
        e.preventDefault();
        if(error){
        try {
           

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: title,des:description,lang:selected.name,url:url })
            };
          const res = await fetch('http://localhost:5000/course', requestOptions);
          const jsondata = await res.json();
          alert(jsondata);
          if(jsondata=="course added")
          {
          window.location.reload(false);
          } 
        } catch (error) {
            console.log(error);
        }
    }else{
        alert('fill everything coorectly');
    }
    }
   
    return (
        <>
          
          
          
          <div className=" sm:p-8  mt-8 ... pt-8 ... grid justify-items-center ...   ">
              <div className="p-0 sm:p-4 md:3/5 sm:3/4  lg:w-2/5 w-100 grid justify-items-center ...  drop-shadow-lg rounded-lg bg-white ">
              <div className="p-6 text-2xl font-semibold text-green-500 text-center ">
              CREATE NEW COURSE
          </div>
          
              <form onSubmit={create} className="p-8">
                  <div>
                      <input required type="text" onChange={updateTitle} value={title}
                       className="py-2 w-72 px-3 block border-2 border-green-400   focus:outline-none focus:border-green-600 focus:border-2 focus-ring-2 focus-ring-green-300 rounded-lg leading-6" placeholder="enter the title"/>
                  </div>
                  <div className="w-72 pt-8 ....">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="  mt-1">
                                <Listbox.Button className=" flow-root w-72 py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus:ring-purple-600 focus-visible:ring-opacity-75
                                 focus-visible:ring-green-600 focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 
                                 focus-visible:border-green-500 sm:text-sm">
                                    <div className="block float-left truncate text-green-500">{selected.name}</div>
                                    <div className=" float-right inset-y-0 right-0 flex items-center  pointer-events-none">
                                    <SelectorIcon
                                        className="w-5 h-5 text-green-500"
                                        aria-hidden="true"
                                    />
                                    </div>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute w-72 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-green-500 ring-opacity-5 focus:outline-none sm:text-sm">
                                    {lang.map((person, personIdx) => (
                                        <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `${active ? 'text-green-900 ' : 'text-green-600'}
                                            hover:bg-green-200  text-white cursor-default select-none relative py-2 pl-10 pr-4`
                                        }
                                        value={person}
                                        >
                                        {({ selected, active }) => (
                                            <>
                                            <span
                                                className={`${
                                                selected ? 'font-medium' : 'font-normal'
                                                } block truncate`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span
                                                className={`${
                                                    active ? ' text-green-600' : '  text-green-600'
                                                }
                                                        hover:bg-green-300 hover:rounded-lg absolute inset-y-0 left-0 flex items-center pl-3`}
                                                >
                                                <CheckIcon className="w-5 h-5 text-green-600 hover:text-white " aria-hidden="true" />
                                                </span>
                                            ) : null}
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                    </Listbox.Options>
                                </Transition>
                                </div>
                            </Listbox>
    </div>
    <div className="pt-8 ...">
                      <textarea  required onChange={updateDes}  value={description} rows="5" cols="32" className=" px-3 block border-2 border-green-300  focus:outline-none focus:border-green-600 focus-ring-2 focus-ring-green-500 rounded-lg leading-6" placeholder="enter the description"></textarea>
                  </div>
                  <div className="pt-8 ... ">
                      <input  required type="url" onChange={updateUrl}  value={url} className="py-2 w-72 px-3 block border-2 border-green-400  focus:outline-none focus:border-green-600 focus-ring-2 focus-ring-green-500 rounded-lg leading-6" placeholder="enter the URL"/>
                 
                  </div>
                  <div className={` p-1 text-sm text-red-600 ${(!error && url.length >0 )?"block":"hidden"}`}>
                      INVALID URL!
                      </div>
                  <div className="p-8 grid justify-items-center ...">
                     <div>
                      <input type="submit" className="px-5  py-2 rounded-lg block bg-green-300 hover:bg-green-400 text-white " value="CREATE"/>
                  </div>
                  </div>

              </form>
              </div>


              <ReactPlayer className={`${error?"block":"hidden"}`} url={YTurl}  controls />

         
          </div>

        </>
    );
}

export default CreateCourse;