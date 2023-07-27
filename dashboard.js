import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard(){
    const navigate=useNavigate();
    const userfirstname=localStorage.getItem("setfirstname");
    const [dashboard,setDashboard]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:1200/SelectDashboard")
        .then(res=>res.json())
        .then(data=>setDashboard(data))
    },[])
    const goback=()=>{
        navigate("/");
        localStorage.clear();
    }
    return (
        <>
            <h1 className="text-center mt-2"><b><i>Dashboard</i></b></h1>
            <button className="btn btn-primary float-left ml-3 mb-3" onClick={goback}>Go to Homepage</button>
            <h4 className="float-right mb-3 mr-3">Hello, {userfirstname}</h4>
            <div className="container-fluid row text-center justify-content-around">
                {dashboard.map((value,index)=>(
                    <>
                        <div class="card col-lg-4 col-md-6 col-sm-12 col-12">
                        <img class="card-img-top" src={value.dashboard_image} alt="Card image cap" height="290"/>
                            <div class="card-body">
                            <h5 class="card-title">{value.dashboard_name}</h5>
                            <p class="card-text">{value.description}</p>
                            <a href={value.dashboard_code+".js"} class="btn btn-primary">{value.dashboard_button}</a>
                            </div>
                        </div>
                    </>
                ))};
            </div> 
        </>
    );
}