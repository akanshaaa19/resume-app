import { NavLink } from "react-router-dom";

const navItems = [
  {icon: <i class="fa-regular fa-file-lines"></i>, link: "edit/templates", name: "Templates" },
  {icon: <i class="fa-regular fa-user"></i>, link: "/edit/personal", name: "Personal Details" },
  {icon: "", link: "/edit/education", name: "Education" },
  {icon: "", link: "/edit/work", name: "Work Experience" },
  {icon: "", link: "/edit/skills", name: "Skills" },
];

function SideBar() {
  return (
    <div className="fixed bottom-0 left-0 px-12 py-8 h-screen border-r-2 border-zinc-800 sidebar">
      {navItems.map((item) => {
        return (
          <NavLink to={item.link}>
            <div className={`nav-item py-2 w-fit `}>{item.name}</div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SideBar;
