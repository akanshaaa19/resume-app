import Header from "./Header";
import QuestionDiv from "../QuestionDiv";
import ResumeDiv from "../ResumeDiv";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

function Layout(props) {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)

  return (
    <>
      <Header />
      <SideBar />
      <main className="flex py-8">{props.children}</main>
    </>
  );
}

export default Layout;
