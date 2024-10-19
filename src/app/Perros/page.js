"use client"
import { useEffect, useState } from "react"
export default function Perritos(){
    const [perrito, setPerro]=useState([]);
    useEffect(()=>{
        getPerro();
    },[])
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
                <img className="w-full h-64 object-cover rounded-t-lg border-4 border-black" src={perrito.message} width="500px" height="500px"></img><br></br>
                <button class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={()=>getPerro()}>Nuevo perrito</button>
            </div>
        </div>  
    )
    function getPerro(){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>response.json())
        .then((data)=>{
            setPerro(data);
    })}
}