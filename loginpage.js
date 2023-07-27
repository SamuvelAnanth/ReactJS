import axios from "axios";
import React from "react";
import './loginpage.css';
import { useNavigate } from "react-router-dom";
import loginscreenimage from './Images/loginscreenimage.jpg';

export function LogInPage(){
    const Navigate = useNavigate();
    const LogInFunc=()=>{
        var emailid=document.getElementById("emailid").value;
        var password=document.getElementById("password").value;
        if (emailid==""||emailid==null){
            alert("please enter emailid");
        }else if(password==""||password==null) {
            alert("please enter password");
        }else {
            var user_list={
                "emailid":emailid,
                "password":password
            }
            console.log(user_list);
            axios.post ('http://localhost:1200/LoginUser',user_list)
            .then((res)=>{
            console.log(res);    
            if(res.data.userid!=null){
                Navigate("./dashboard");
                localStorage.setItem("setuserid",res.data.userid);
                localStorage.setItem("setusername",res.data.username);
                localStorage.setItem("setfirstname",res.data.firstname);
            }
            else{
                alert("Username and Password didn't Match");
            }
            })
            .catch((error)=>{
                console.log(error);
            })
            document.getElementById("emailid").value=""
            document.getElementById("password").value=""
        }
    }
    return (
        <>   
            <h1 className="text-center">Log In</h1>
            <div className="text-center">
                <img src={loginscreenimage} height={100}/><br/>
                <label className="pr-2">E-Mail ID : </label>
                <input type="text" id="emailid" name="emailid" autoComplete="off" placeholder="Your E-Mail ID"/><br/>
                <label className="pr-2">Password : </label>
                <input type="password" name="password" id="password" placeholder="Your Password"/><br/>
                <button type="button" onClick={LogInFunc} className="btn btn-success mt-2">Log-In</button>
            </div>
        </>
    );
}