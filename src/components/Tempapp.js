import React,{useEffect, useState} from "react";
import "./css/style.css";
const Tempapp= ()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Howrah");

    useEffect(()=>{
        const fetchApi=async () =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c423fda84b66f0770e7a6999f8a8bf2e`
            const response=await fetch(url);
            const resJson=await response.json();
            // console.log(resJson);
            setCity(resJson);
        };
        fetchApi();
    },[search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" value={search} className="inputField"
                        onChange={(event)=>{ setSearch(event.target.value)}} />                  
                </div>

         {!city ? (
                    <p className="errorMsg">Data Not Found</p>
                ) : (
                    <div>

                <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>{search},{city.sys.country}
                    </h2>
                    <h1 className="temp">
                    {city.main.temp}°C
                    </h1>
                    <h3 className="tempmin_max">Min:{city.main.temp_min}°C | Max:{city.main.temp_max}°C</h3>
                <h3 className="tempmin_max">Weather:{city.weather[0].main} | Status:{city.weather[0].description}</h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>

                    </div>
        )}
            </div>
        </>
    )
}
export default Tempapp;