/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Customers from "./components/pages/Customers/Customers";
import Terms from "./components/pages/Terms&Condition/Terms";
import Privacy from "./components/pages/PrivacyPolicy/Privacy";
import Help from "./components/pages/Help/Help";
import NotifyCustomer from "./components/pages/Notifications/NotifyCustomer";
import GetInTouch from "./components/pages/GetInTouch";
import ProductView from "./components/pages/Notifications/ProductView";
import ResourceVideo from "./components/pages/ResourceVideo";
import ResourceBlog from "./components/pages/ResourceBlog";
import Expert from "./components/pages/Expert";
import CourseRegister from "./components/pages/CourseRegister";
import TrendingCourse from "./components/pages/TrendingCourse";
import CustomerCourses from "./components/pages/CustomerCourses";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/Notice/Customer" element={<NotifyCustomer />} />
        <Route path="/pro/:courseId/:levelId" element={<ProductView />} />
        <Route path="/getInTouch" element={<GetInTouch />} />
        <Route path="/ResourceVideo" element={<ResourceVideo />} />
        <Route path="/ResourceBlog" element={<ResourceBlog />} />
        <Route path="/experts" element={<Expert />} />
        <Route path="/CourseRegister" element={<CourseRegister />} />
        <Route path="/trendingCourse" element={<TrendingCourse />} />
        <Route path="/customer/courses/:id" element={<CustomerCourses />} />
        <Route path="/coupon" element={<Cou}
       </Routes>
    </>
  );
}

export default App;
