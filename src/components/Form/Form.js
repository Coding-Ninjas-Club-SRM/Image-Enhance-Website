import React , {useRef, useState} from 'react'
import t1 from './assets/t1.png'
import t2 from './assets/transparent2.png'

import './Form.module.css';

const Form = () => {
  const [{alt, src}, setImg] = useState({
      src: t1,
      alt: 'Upload an Image'
  });

  const handleImg = (e) => {
      if(e.target.files[0]) {
          setImg({
              src: URL.createObjectURL(e.target.files[0]),
              alt: e.target.files[0].name
          });    
      }   
  }
  
  const fileInput=React.useRef(null);

  const handleClick=event=>{
    fileInput.current.click();
  }

  return (
        <div className="container mx-auto flex items-center h-screen">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 place-items-center">
         <div className="col-span-1 lg:col-span-3">
        <div className="container h-50 place-items-center shrink-1"> 
                <div className="grid grid-cols-2 grid-row-2  bg-[url('./assets/boxbackground.png')] bg-no-repeat bg-cover rounded px-2 py-4 mx-4 my-4 md:px-5 py-5">
                     <div className="row-span-2 flex rounded  ">
                        <img src={src} className="object-contain rounded"></img>
                     </div>
                     <div className="row-span-2 flex justify-center items-center"> <img src={t1}></img></div>
                 </div>
              </div>
             </div>
                    <div className="text-2xl text-white font-bold col-span-1 ml-1 mr-1 lg:col-span-2 md:text-5xl">Enhance the Quality of Your Pictures <br></br>
                      <button onClick={handleClick} class="bg-fuchsia-900 text-white pl-8 pr-8 pt-2 pb-2 mt-4 rounded-full text-base md: text-2xl pl-8 pr-8 pt-2 pb-2 mt-5">
                        Upload
                      </button>
                      <input 
                       type="file" 
                       accept=".png, .jpg, .jpeg" 
                       id="photo" 
                       className="visually-hidden"
                       onChange={handleImg}
                       ref={fileInput}
                       style={{display: 'none'}}
                      /> 
                    </div>
                </div>
             </div>
          /* <img src={src} alt={alt} className="form-img__img-preview"/> */

  );
}

export default Form;