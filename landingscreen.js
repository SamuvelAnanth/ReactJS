import React from "react";
import { Link } from "react-router-dom";
import './landingscreen.css';
import landingscreenfirstimage from './Images/landingPageFirstImage.jpeg';

export function LandingScreen(){
    return (
        <>
            <div className="landingpagemaindiv col-lg-12">
                <h1 className="pt-1 text-center landingscreenheader text-dark"><b>Employee Management System</b></h1>
                <div className="container-fluid row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <img src={landingscreenfirstimage} className="pt-5 col-lg-12 col-md-12 col-sm-12 col-12"/>
                    </div>
                    <div className="pt-5 col-lg-4 col-md-4 col-sm-12 col-12">
                        <h4 className="text-center landingabout text-dark"><b><u><i>About this Project</i></u></b></h4>
                            <h6 className="text-center landingpara pt-3">This is the project about Employee Management System. It Contains Employee Details, Employee Attendance, Employee Leave Request and Holiday Details. This Project was full and full created and maintained by myself. And it's fully responsive and the front end, back end and database all are created by myself alone. It was created with HTML, CSS, JavaScript, ReactJS, MySQL and NodeJS.</h6>
                            <Link to="/register"><a className="btn rounded btn-info mb-5 mt-4">Register</a></Link>
                            <Link to="/login"><a className="btn rounded btn-primary mb-5 mt-4 float-right">Log-In</a></Link>
                    </div>
                </div>
            </div>
        </>
    );
}