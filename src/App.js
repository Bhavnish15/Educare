import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/Layout/Header';
import Courses from './components/Courses';
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import AboutUs from './components/AboutUs/AboutUs';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/Layout/NotFound';
import PaymentsSuccess from './components/Payments/PaymentsSuccess';
import PaymentFailed from './components/Payments/PaymentFailed';
import CourseDetail from './components/CourseDetail';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';

import Dashboard from './components/Admin/Dashboard';
import Course from './components/Admin/Course';
import CreateCourse from './components/Admin/CreateCourse';
import Users from './components/Admin/Users';



function App() {
      window.addEventListener ('contextmenu', e  => {
        e.preventDefault()
});

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allcourses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/requestcourses" element={<Request />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/paymentsuccess" element={<PaymentsSuccess />} />
        <Route path="/paymentfail" element={<PaymentFailed />} />
        <Route path='/allcourses/course/:id' element={<CourseDetail />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        {/* ADMIN ROUTES */}
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/course' element={<Course />} />
        <Route path='/admin/createcourse' element={<CreateCourse />} />
        <Route path='/admin/users' element={<Users />} />

        
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
