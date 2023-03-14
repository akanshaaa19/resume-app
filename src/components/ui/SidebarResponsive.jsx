import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { uiAction } from "../../store";

const navItems = [
  {icon: <i class="fa-regular fa-file-lines"></i>, link: "edit/templates", name: "Templates" },
  {icon: <i class="fa-regular fa-user"></i>, link: "/edit/personal", name: "Personal Details" },
  {icon: "", link: "/edit/education", name: "Education" },
  {icon: "", link: "/edit/work", name: "Work Experience" },
  {icon: "", link: "/edit/skills", name: "Skills" },
];

function SideBarResponsive() {
  const dispatch = useDispatch()
  return (
    <>
    <div onClick={()=>{dispatch(uiAction.showSideBar(false))}} className="w-screen absolute top-0 h-screen bg-black opacity-40 z-10" />
    <div className="fixed opacity-1 bottom-0 left-0  z-20 bg-[#1e1e1e] shadow-xl sidebar-r  px-4 py-8 h-screen  flex md:hidden flex-col">
      {navItems.map((item) => {
        return (
          <NavLink to={item.link}>
            <div className={`nav-item py-2 w-fit `}>{item.name}</div>
          </NavLink>
        );
      })}
    </div></>
  );
}

export default SideBarResponsive;
