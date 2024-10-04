import React from "react";
import data from './data.json';
import { useNavigate } from "react-router-dom";


function Movie() {

    const navigate=useNavigate();
    
    const handleClick = (id) => {

        console.log(id);
        
        
        navigate('/imageSlider',{state:id});
        
    }
    return (
        <div>

            {
                data.map((data, i) => (
                    <div key={i} class=" flex flex-shrink-0">
                        <div class=" ml-6  w-100 p-2  bg-white border-4 border-blue-300 border-dashed ">
                            <div class="w-96 p-4  bg-white border-none  " >
                                <div class="flex flex-col cursor-pointer"  onClick={() => handleClick(data.imdbID)} >

                                    <div ><img class=" m-auto w-80 p-1 border-2 border-gray-600 rounded-md" src={data.Poster} alt=""  ></img>

                                    </div>
                                    <div class=" flex items-center justify-center mt-3">   {data.Title}</div>
                                    <div class="flex items-center justify-center">  {data.Released} </div>

                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }

        </div>


    )



}
export default Movie;