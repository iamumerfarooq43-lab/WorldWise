import AppNav from "./AppNav";
import Logo from "./Logo";
import style from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={style.footer}>
        <p>&copy; {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
    </div>
  );
}

export default SideBar;
