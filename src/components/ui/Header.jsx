import { useDispatch, useSelector } from "react-redux";
import { authActions, uiAction } from "../../store";

function Header() {
   const dispatch = useDispatch();
   const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  const showSideBar = useSelector(state=>state.ui.showSideBar)

  return (
    <header className="py-6 px-8 fixed z-50 text-xl bg-[#1e1e1e] font-semibold flex justify-between w-full">
      <div className="flex items-center">
        <div className="md:hidden flex mr-8">
      {!showSideBar && <i onClick={()=>dispatch(uiAction.showSideBar(true))} class="fa-solid fa-bars "></i>}
      {showSideBar && <i onClick={()=>dispatch(uiAction.showSideBar(false))} class="fa-solid fa-xmark"></i>}</div>
        <i class="fa-solid fa-file-contract text-violet-400 mr-4 fa-xl shadow-xl shadow-violet-400"></i>
        <p>resume generator</p>
      </div>
      {isLoggedIn && <p onClick={()=>{
         dispatch(authActions.logOutHandeler())
      }}>
        <i className="fa-solid fa-arrow-right-from-bracket cursor-pointer fa-"></i>
      </p>}
    </header>
  );
}

export default Header;
