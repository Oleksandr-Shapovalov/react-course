import React, { useRef } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import NavbarFriends from "./navFriends/NavbarFriends";
const Navbar = () => {
  const nav = useRef(null);
  const toggler = useRef(null);
  const closeSidebar = () => {
    nav.current.classList.remove(classes.navOpen);
    toggler.current.classList.remove(classes.toggled);
    document.body.classList.remove(classes.lock);
  };
  return (
    <>
      <span
        ref={toggler}
        onClick={() => {
          nav.current.classList.toggle(classes.navOpen);
          toggler.current.classList.toggle(classes.toggled);
          document.body.classList.toggle(classes.lock);
        }}
        className={classes.toggleSidebar}
      ></span>
      <aside className={classes.wrapper}>
        <nav className={classes.nav} ref={nav}>
          <div onClick={closeSidebar} className={`${classes.item}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </div>
          <div onClick={closeSidebar} className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/dialogs"
            >
              Messages
            </NavLink>
          </div>
          <div onClick={closeSidebar} className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/news"
            >
              News
            </NavLink>
          </div>
          <div onClick={closeSidebar} className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/music"
            >
              Music
            </NavLink>
          </div>
          <div onClick={closeSidebar} className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/setting"
            >
              Setting
            </NavLink>
          </div>
          <div onClick={closeSidebar} className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/users"
            >
              Find Users
            </NavLink>
          </div>
          <NavbarFriends />
        </nav>
      </aside>
    </>
  );
};
export default Navbar;
