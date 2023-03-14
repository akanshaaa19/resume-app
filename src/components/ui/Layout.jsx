import Header from "./Header";
import QuestionDiv from "./QuestionDiv";
import ResumeDiv from "./ResumeDiv";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import SideBarResponsive from "./SidebarResponsive";

function Layout(props) {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  const showSideBar = useSelector(state=>state.ui.showSideBar)

  return (
    <>
      <Header />
      <SideBar />
      {showSideBar && <SideBarResponsive />}
      <main className="flex py-8 justify-center items-center">{props.children}</main>
    </>
  );
}

export default Layout;
