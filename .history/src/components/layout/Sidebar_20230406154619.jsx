/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { toast } from "react-toastify";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <i class="fa-sharp fa-regular fa-grid-horizontal"></i>,
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/customer",
      name: "Users",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/getInTouch",
      name: "Get In Touch",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/CourseRegister",
      name: "Course Register",
    },

    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/Notice/Customer",
      name: "Courses",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/ResourceVideo",
      name: "Resource Video",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/ResourceBlog",
      name: "Resource Blogs",
    },

    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/experts",
      name: "Experts",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/coupon",
      name: "Coupon's",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/trendingCourse",
      name: "Trending Course",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/terms",
      name: "Terms&Condition",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/privacy",
      name: "Privacy Policy",
    },
    {
      icon: <i className="fa-solid fa-book-open-reader"></i>,
      link: "/help",
      name: "Help&Support",
    },
  ];

  const logOut = async (e) => {
    localStorage.removeItem("token");
    toast.success("Log-Out SuccessFull");
    navigate("/");
  };

  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundColor: "#263544",
          minHeight: "100vh",
        }}
      >
        <div className="w-full md:hidden relative  mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        <figure className="flex  flex-col items-center">
          <span
            className="font-bold text-[rgb(241,146,46)]"
            style={{ fontSize: "2rem", textAlign: "center", color: "#fff" }}
          >
            Admin Panel
          </span>
        </figure>
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="">
                <span
                  className="flex my-3 items-center cursor-pointer   tracking-wider p-2 rounded-sm"
                  style={{ color: "#aac0bb", gap: "10px" }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}

          <span
            onClick={() => logOut()}
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            style={{ color: "#aac0bb" }}
          >
            <BiLogOutCircle className="text-xl mr-3" /> Logout
          </span>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
