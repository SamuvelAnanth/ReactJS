import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import './holiday.css';

export function Holiday(){
    const navigate=useNavigate();
    const [holiday,setHoliday]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:1200/HolidayList")
        .then(res=>res.json())
        .then(data=>setHoliday(data))
    },[])
    const goback=()=>{
        navigate("/login/dashboard");
    }
    return (
        <>
            <h1 className="text-center">Holidays List</h1>
            <button className="btn btn-primary float-right mr-5" onClick={goback}>Go to Dashboard</button>
            <div className="container-fluid row text-center justify-content-center col-lg-12 col-md-12 col-sm-12 col-12">
                <table border={2} className="text-center m-4">
                    <thead>
                        <th>S.No</th>
                        <th>Date</th>
                        <th>Festival Name</th>
                        <th>Festival Image</th>
                        <th>Description</th>
                    </thead>
                    {holiday.map((value,index)=>(
                        <>
                            <tr>
                                <td className="p-3">{index+1}</td>
                                <td className="p-3">{moment(value.holiday_date).format("Do MMMM YYYY")}</td>
                                <td className="p-3">{value.holiday_name}</td>
                                <td className="p-3"><img src={value.holiday_image} height={300} width={300}/></td>
                                <td className="p-3">{value.festival_description}</td>
                            </tr>
                        </>
                    ))}
                </table>
            </div>
        </>
    );
}