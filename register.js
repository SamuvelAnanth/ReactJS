import React from "react";
import axios from "axios";
import './register.css';
import { useNavigate } from "react-router-dom";
import registerpageimage from './Images/Registerpageimage.jpg';

export function Register(){
        const Navigate = useNavigate();
        const goback=()=>{
            Navigate("/login");
        }
        const insertStaffDetails= async(event)=>{
        event.preventDefault();
        var config = { headers: { "enctype": "multipart/form-data" } };
        var firstname=document.getElementById("employeefirstname").value;
        var lastname=document.getElementById("employeelastname").value;
        var gender=document.querySelector('input[name="gender"]:checked').value;
        var dateofbirth=document.getElementById("dateofbirth").value;
        var mailid=document.getElementById("emailid").value;
        var valid=new RegExp(/^([a-z0-9]+)@([a-z]+)\.([a-z]{2,3})/);
        var validemail=mailid.match(valid);
        var mobile=document.getElementById("mobile").value;
        var validmob=new RegExp(/^[6-9][0-9]{9}/);
        var validmobile=mobile.match(validmob);
        var enterpassword=document.getElementById("password").value;
        var confirmpassword=document.getElementById("confirmpassword").value;
        if(firstname==""||firstname==null){
            document.getElementById("firstnamelabel").innerHTML="Please fill the First Name";
        }else if(lastname==""||lastname==null){
            document.getElementById("lastnamelabel").innerHTML="Please fill the Last Name";
        }else if(gender==""||gender==null){
            document.getElementById("genderlabel").innerHTML="Please fill the Gender";
        }else if(mailid==""||mailid==null||validemail==null){
            document.getElementById("emailidlabel").innerHTML="Please fill the E-Mail ID";
        }else if(mobile==""||mobile==null||validmobile==null){
            document.getElementById("mobilelabel").innerHTML="Please fill the Mobile";
        }else if(enterpassword==""||enterpassword==null){
            document.getElementById("passwordlabel").innerHTML="Please fill the Password"
        }else{
        if(enterpassword==confirmpassword){
            var password=document.getElementById("password").value;
            await axios.post('http://localhost:1200/InsertUser',{firstname, lastname, gender, dateofbirth, mailid, mobile, password},config)
            .then((result)=>{
                console.log(result);
                alert("Registered Successfull....!!You can Login Now");
                Navigate('/login');
            })
            .catch((error)=>{
                console.log(error);
            })
        }else{
            alert("password and confirm password didn't matched. please enter same password");
        }
    }   
}
    return (
        <>
            <h1 className="text-center">Register</h1>
            <input type="button" value="Go to Log-In" className="mb-3 mr-3 mt-3 btn btn-success float-right" onClick={goback}/>
                <div className="container-fluid row justify-content-center pt-3">
                    <div className="col-lg-4 col-md-5 col-sm-12 col-12 text-center pt-2">
                        <form>
                            <table className="text-center">
                                <tr><td><label className="mr-2 reglab">First Name* : </label></td>
                                <td><input type="text" name="employeefirstname" id="employeefirstname" placeholder="Your First Name" required autoComplete="off"/></td>
                                <td><label id="firstnamelabel"></label></td></tr>
                                <tr><td><label className="mr-2 reglab">Last Name* : </label></td>
                                <td><input type="text" name="employeelastname" id="employeelastname" placeholder="Your Last Name" required autoComplete="off"/></td>
                                <td><label id="lastnamelabel"></label></td></tr>
                                <tr><td><label className="mr-2 reglab">Gender* : </label></td>
                                <td><input type="radio" name="gender" id="gender" value="Male" className="mr-1 ml-2" required/>Male
                                <input type="radio" name="gender" id="gender" value="Female" className="mr-1 ml-2" required/>Female</td>
                                <td><label id="genderlabel"></label></td></tr>
                                <tr><td><label className="mr-2 reglab">Date of Birth : </label></td>
                                <td><input type="date" name="dateofbirth" id="dateofbirth" placeholder="Your Date of Birth"/></td>
                                <td><label id="dateofbirthlabel"></label></td></tr>
                                <tr><td><label className="mr-2 reglab">E-Mail ID* : </label></td>
                                <td><input type="email" name="emailid" id="emailid" placeholder="Your Mail" required autoComplete="off"/></td>
                                <td><label id="emailidlabel"></label></td></tr>
                                <tr><td><label className="mr-2 reglab">Mobile* : </label></td>
                                <td><input type="text" name="mobile" id="mobile" placeholder="Your Mobile" required autoComplete="off"/></td>
                                <td><label id="mobilelabel"></label></td></tr>
                                <tr><td><label className="mr-2 reglab">Password* : </label></td>
                                <td><input type="password" name="password" id="password" placeholder="Password" required/></td>
                                <td><label id="passwordlabel"></label></td></tr>
                                <tr><td><label className="mr-2 reglab">Confirm Password* : </label></td>
                                <td><input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" required/></td></tr>
                                <tr><td colSpan={2}><button type="submit" onClick={insertStaffDetails} className="mb-3 mt-3 btn btn-primary">REGISTER</button></td></tr>
                            </table>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-12 col-12">
                        <img src={registerpageimage} className="col-sm-12 col-12 mt-3" width="200"/>
                    </div>
                </div>
        </>
    );
}