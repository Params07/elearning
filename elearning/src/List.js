import {React} from 'react';
import ReactPlayer from 'react-player';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const List = ({title,des,url})=>
{
    return(
        <>
        <ScrollAnimation animateIn="rollin" animateOut="slideOutRight" >
 
           <div className="p-10 ">  
   
    <div className="max-w-sm rounded overflow-hidden  font-semibold hover:font-bold text-black bg-white shadow-inner  ">
    <ReactPlayer  width="100%" height="100%"  url={url}  controls />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 hover:underline uppercase ...">{title}</div>
        <p className="pl-4 ... text-gray-500 text-base">
         {des}
        </p>
      </div>
     
       
      </div>
   </div>




   
</ScrollAnimation>

        
       
        </>
    );
}

export default List;