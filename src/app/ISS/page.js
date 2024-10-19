"use client"
import { useEffect, useState } from "react";
export default function ISS(){
    const [iss,setIss]=useState([]);
    const [crew,setCrew]=useState([]);
    console.log(iss);
    console.log(crew);
    useEffect(()=>{
        getData();
        const interval=setInterval(getData,60000);
        return()=>clearInterval(interval);
    },[]);
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96"> 
                <h2 className="text-white text-xl font-semibold mb-4">Información de la ISS</h2>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                    <h3 className="text-gray-800 font-semibold">Datos de posición</h3>
                    <p className="text-gray-600">Latiutud: {iss && iss.iss_position ? iss.iss_position.latitude+"° N" : "Cargando..."}</p>
                    <p className="text-gray-600">Longitud: {iss && iss.iss_position ? iss.iss_position.longitude+"° E" : "Cargando..."}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-gray-800 font-semibold">Tripulantes en la ISS</h3>
                    <p className="text-gray-600">{crew.number}</p>
                </div>
            </div>
        </div>
    )
    async function getPosition(){
        const res=await fetch("http://api.open-notify.org/iss-now.json");
        const iss=await res.json();
        return(iss);
    }
    async function getCrew(){
        const res=await fetch("http://api.open-notify.org/astros.json");
        const crew=await res.json();
        return(crew);
    }
    async function getData(){
        setIss(await getPosition());
        setCrew(await getCrew());
    }
}
