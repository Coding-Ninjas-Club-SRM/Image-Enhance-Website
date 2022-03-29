import React , {useRef} from 'react'
import t1 from './assets/transparent1.png'
import t2 from './assets/transparent2.png'
function Form() {
    const onButtonClick = () => {
       inputFile.current.click();
      };
    
    const inputFile = useRef(null) 
    return (
        <div className="container mx-auto flex items-center h-screen">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 place-items-center">
        <div className="col-span-1 lg:col-span-3">
          <div className="container h-50 place-items-center">
            <div className="grid grid-cols-3 grid-row-2  bg-[url('./assets/boxbackground.png')] rounded">
                <div className="row-span-2 ">
                    <img src={require('./assets/transparent1.png')}></img>
                </div>
                <div className="col-span-2 flex justify-center items-center"> <img src={t2}></img></div>
                <div className="col-span-2 flex justify-center items-center"> <img src={t2}></img></div>
            </div>
          </div>
        </div>
               <div className="text-4xl text-white font-bold col-span-1 lg:col-span-2 lg:text-5xl">Enhance the Quality of Your Pictures <br></br>
                 <button onClick={onButtonClick} class="bg-fuchsia-900 text-white pl-8 pr-8 pt-3 pb-3 mt-3 rounded-full text-xl">
                   Upload
                 </button>
                 <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
               </div>
            </div>
        </div>
    )
}

export default Form