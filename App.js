import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { LogInPage } from './Components/loginpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './Components/register';
import { LandingScreen } from './Components/landingscreen';
import { Dashboard } from './Components/dashboard';
import { Attendance } from './Components/attendance';
import { LeaveRequest } from './Components/leave_request';
import { Holiday } from './Components/holiday';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingScreen/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<LogInPage/>}/>
          <Route path='/login/dashboard' element={<Dashboard/>}/>
          <Route path='/login/attendance.js' element={<Attendance/>}/>
          <Route path='/login/leave_request.js' element={<LeaveRequest/>}/>
          <Route path='/login/holiday.js' element={<Holiday/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
