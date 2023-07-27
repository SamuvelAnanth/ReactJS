import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import attendancepageimage from './Images/attendancepageimage.jpg';
import './attendance.css';

export function Attendance(){
    const navigate = useNavigate();
    const [loginButtonInd,setLoginButtonInd]=useState(false);
    const [logoutButtonInd,setLogoutButtonInd]=useState(true);
    useEffect(()=>{
        let userid=localStorage.getItem("setuserid");
        axios.get("http://localhost:1200/FetchLogin/"+userid).then((res)=>{
            let start_time=moment(res.data.data[0].logintime).format('YYYY-MM-DD h:mm:ss');
            let end_time=moment(res.data.data[0].logouttime).format('YYYY-MM-DD h:mm:ss');
            document.getElementById("displaylogin").innerHTML='<b>Log-In Time : '+start_time+'</b>';
            if(start_time!=null&&end_time==="Invalid date"){
                setLoginButtonInd(true);
                setLogoutButtonInd(false);
            }else if(end_time!=null){
                setLoginButtonInd(true);
                setLogoutButtonInd(true);
                document.getElementById("displaylogout").innerHTML='<b>Log-Out Time : '+end_time+'</b>';
            }
        })
    },[])
    const userLogin=()=>{
        var date=moment(new Date()).format('YYYY-MM-DD h:mm:ss');
        localStorage.setItem("login_time",date);
        setLoginButtonInd(true);
        setLogoutButtonInd(false);
        var userid=localStorage.getItem("setuserid");
        var username=localStorage.getItem("setusername");
        var logintime=date;
            axios.post ('http://localhost:1200/AttendanceLogin',{userid,username,logintime})
            .then((res)=>{
                console.log(res);
            })
        document.getElementById("displaylogin").innerHTML='<b>Log-In Time : '+logintime+'</b>';
    }
    const userLogOut=()=>{
        var date=moment(new Date()).format('YYYY-MM-DD h:mm:ss');
        localStorage.setItem("logout_time",date);
        setLogoutButtonInd(true);
        var userid=localStorage.getItem("setuserid");
        var username=localStorage.getItem("setusername");
        var logouttime=date;
            axios.put ('http://localhost:1200/AttendanceLogOut',{userid,username,logouttime})
            .then((res)=>{
                console.log(res);
            })
        document.getElementById("displaylogout").innerHTML='<b>Log-Out Time : '+logouttime+'</b>';
    }
    const goback=()=>{
        navigate("/login/dashboard")
    }
    return (
        <>
            <h1 className="text-center mt-2">Attendance</h1>
            <button className="btn btn-primary float-right mr-5" onClick={goback}>Go to Dashboard</button>
            <div className="container-fluid row text-center justify-content-center">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <img src={attendancepageimage} width={450} className="col-md-12 col-sm-12 col-12"/>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <h5 className="attendpara mt-4 mb-3">It consists of records of payroll heads like the present, absent, late comings, holidays, job training and all other kinds of leaves used to calculate the salary. The HR department, executives, and business owners then use this data to calculate the salary of their employees.Your write up should include the employee's attendance record. It should list all the dates the employee was tardy, absent or left early. If the employee has taken more time off than allowed in their benefits package.</h5>
                    <label className="text-center" id="displaylogin">.</label><br/>
                    <label className="text-center" id="displaylogout">.</label><br/>
                    <button className="btn btn-success mb-5 float-left" onClick={userLogin} disabled={loginButtonInd}>Log-In</button>
                    <button className="btn btn-danger mb-5 float-right" onClick={userLogOut} disabled={logoutButtonInd}>Log-Out</button>
                </div>
            </div>
        </>
    );
}