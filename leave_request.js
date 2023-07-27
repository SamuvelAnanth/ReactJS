import axios from "axios";
import React from "react";
import moment from "moment";
import leaverequestimage from './Images/leaverequestpageimage.jpg';
import { useNavigate } from "react-router-dom";
import './leave_request.css'

export function LeaveRequest(){
    const navigate=useNavigate();
    const applyleave=()=>{
        var date=document.getElementById("leavedate").value;
        var leavedate=moment(date).format('YYYY-MM-DD');
        var reason=document.getElementById("reason").value;
        var userid=localStorage.getItem("setuserid");
        var username=localStorage.getItem("setusername");
        axios.post ('http://localhost:1200/LeaveRequest',{userid,username,leavedate,reason})
            .then((res)=>{
                console.log(res);
            })
        alert("Leave Requested Successfully....!!")
        document.getElementById("leavedate").value="";
        document.getElementById("reason").value="";
    }
    const goback=()=>{
        navigate("/login/dashboard");
    }
    return (
        <>
            <h1 className="text-center">Leave Request</h1>
            <button className="btn btn-primary float-right mr-5" onClick={goback}>Go to Dashboard</button>
            <div className="container-fluid row text-center justify-content-center">
                <div className="col-lg-6 col-md-5 col-sm-12 col-12">
                    <img src={leaverequestimage} width={450} className="mt-4 col-md-12 col-sm-12 col-12"/>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 pt-5">
                    <h5 className="mb-4 leavepara">A leave request is a message in which you ask your employer or supervisor for time off work. Typically, in the message, you'd state the reason behind your request and specify the dates that you want to take off.</h5>
                    <label className="pr-2 control-label"><b>Select a Date :</b></label>
                    <input type='date' min={new Date().toISOString().split('T')[0]} id="leavedate"/><br/>
                    <label className="pr-2"><b>Select a Reason : </b></label>
                    <select className="mt-2" id="reason">
                        <option value="">Select a Option</option>
                        <option value="sick_leave">Sick Leave</option>
                        <option value="going_to_outstation">Going to Outstation</option>
                        <option value="loss_of_pay_leave">Loss of Pay Leave</option>
                        <option value="maternity_leave">Maternity Leave</option>
                        <option value="paternity_leave">Paternity Leave</option>
                        <option value="casual_leave">Casual Leave</option>
                        <option value="annual_leave">Annual Leave</option>
                        <option value="marriage_leave">Marriage Leave</option>
                    </select><br/>
                    <a className="btn btn-success mt-2" onClick={applyleave}>SUBMIT</a>
                </div>
            </div>
        </>
    );
}