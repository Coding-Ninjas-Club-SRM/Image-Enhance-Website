import React , {useRef, useState} from 'react'
import t1 from './assets/t1.png'
import t2 from './assets/transparent2.png'
// import { saveAs } from 'file-saver'

import './Form.module.css';

const Form = () => {

var uploaded_image

var body

var file

var image2


  const [{alt, src,src1}, setImg] = useState({
      src: t1,
      alt: 'Upload an Image',
      src1:t1
  });
  

  const handleImg = (e) => {
      if(e.target.files[0]) {
          setImg({
              src: URL.createObjectURL(e.target.files[0]),
              alt: e.target.files[0].name
          });    
          uploaded_image=URL.createObjectURL(e.target.files[0])
          console.log(uploaded_image);
          base();
      }   
  }
async function api_call(){
    const api_response = await fetch("https://mirnet-h5-api.azurewebsites.net/mirnet-api",
     { method: 'POST', 
     body: JSON.stringify(body), 
     headers: {'Accept': 'application/json',
     'Content-Type': 'application/json',
     mode: 'no-cors' }})
    const response = await api_response.json()

    return response
  }

function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

function base() {
    var base64 = "base"
        toDataUrl(uploaded_image , function(myBase64) {
        // console.log(myBase64); // myBase64 is the base64 string

        base64 = myBase64

        const base64_split = base64.split(",")[1]
        // console.log(base64_split)
    
        body = {
            "png": base64_split
        }

        api_call().then(resp => 
            update_refined_image(resp)
    
        )
    
    })}

function update_refined_image(response) {
    image2 = response['refined_image']
    console.log(image2)
    setImg({
      src: uploaded_image,
      alt: "changes",
      src1:image2
  });    
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
                <div className="grid grid-cols-2 gap-3 grid-row-2  bg-[url('./assets/boxbackground.png')] bg-no-repeat bg-cover rounded px-2 py-4 mx-4 my-4 md:px-5 py-5">
                     <div className="row-span-2 flex rounded  ">
                        <img src={src} className="object-contain rounded"></img>
                     </div>
                     <div className="row-span-2 flex justify-center items-center"> <img src={src1}></img></div>
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
                      {/* <button onClick={downloadImage}>Download!</button> */}
                    </div>
                </div>
             </div>
          /* <img src={src} alt={alt} className="form-img__img-preview"/> */

  );
}

export default Form;