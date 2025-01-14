import React, { useState } from "react";
import { sidebar } from "../constant/sidebar";
import { LayoutDashboard, Menu, Moon, Search } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);

  const handleToggleClick = (id: number) => {
    console.log(id);
    setSelectedLink(selectedLink === id ? 0 : id);
  };

  // const location = useLocation().pathname;
  // let pageTitle = location.replace("/dashboard/", "").split("-").join(" ");

  // con
  return (
    <div className="flex overflow-hidden h-screen relative text-black ">
      <div
        className={` bg-[#1E3A8A] shadow-md sticky top-0 h-screen  ${
          !open ? "w-20 " : "w-48"
        } transition-all ease-in-out duration-500 p-2`}
      >
        <div className="  flex justify-center items-center py-3 ">
          <img
            src="/images/logo2.png"
            alt=""
            className={`size-20 object-cover ${!open && "size-14"}`}
          />
        </div>

        <div className=" p-3">
          <h6
            className={`text-md text-white pb-3 uppercase font-medium ${
              !open && "hidden"
            }`}
          >
            general
          </h6>
          <nav className="flex items-center text-white ">
            <ul className="capitalize w-full">
              <li
                className={`py-4 text-md flex gap-3  ${
                  !open ? "hidden " : "block"
                } `}
              >
                
                  <LayoutDashboard />
                
              <Link to="/dashboard">  Dashboard</Link>
              </li>
              {sidebar.map((sidebarItem) => {
                return (
                  <li
                    key={sidebarItem.id}
                    className={`py-4 text-md   cursor-pointer   transition-all duration-500 ease-in-out  ${!open &&"mx-2"}`}
                  >
                    <div
                      className={`flex justify-between  ${
                        !open && " items-center"
                      } `}
                    >
                      <div className="flex space-x-3  ">
                        <span >{sidebarItem.img}</span>
                        <span className={`${!open ? "hidden" : "block"}`}>
                          
                          {sidebarItem.name}
                        </span>
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className={`lucide lucide-chevron-down  ${
                          selectedLink === sidebarItem.id && "rotate-180 "
                        }  ${!open ? "hidden" : "block"}`}
                        onClick={() => handleToggleClick(sidebarItem.id)}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                    <ul
                      className={`transition-all ease-in-out duration-500 overflow-hidden ${
                        selectedLink === sidebarItem.id
                          ? "scale-y-100 h-auto  mx-9"
                          : "scale-y-0 h-0"
                      }`}
                    >
                      {sidebarItem.list.map((el) => (
                        <Link to={el.link}>
                          <li key={el.id} className="py-2 ">
                            {el.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className=" flex-1 overflow-y-auto bg-[#F4F5F7] h-screen flex flex-col ">
        <div className="  flex  justify-between items-center p-4 bg-white shadow-lg">
          <div className="flex gap-4  text-gray-700 items-center">
            <div onClick={() => setOpen(!open)}>
              <Menu />
            </div>
          
          </div>
          <div className="flex items-center gap-6 ">
            <div className="flex  gap-3">
              <div className=" py-2 text-gray-600 ">
                <Moon />
              </div>
              <img
                src="https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-10 h-10 rounded-full border-2 object-cover"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className=" w-[16rem] rounded-lg py-2 bg-[#F4F5F7] outline-none px-10 "
                placeholder="search....."
              />
              <span className="absolute top-2 left-0 px-2 ">
                <Search />
              </span>
            </div>
          </div>
        </div>
        {/* main content here  */}
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
