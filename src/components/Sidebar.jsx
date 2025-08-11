import { useState } from "react";
import styles from "./Sidebar.module.css";
import {
  MdSpaceDashboard,
  MdToday,
  MdViewWeek,
  MdSettings,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { navItems } from "../data/sidabar";
import { Link, NavLink } from "react-router-dom";
import logo from "/public/logo.png";
const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <section
      className={`${styles.sidebar} ${isCollapse ? styles.collapsed : ""}`}
    >
      <div className={styles.sidebarContainer}>
        <div className={styles.logoContainer}>
          {!isCollapse && <img src={logo} alt="logo" className={styles.logo} />}
        </div>
        <ul className={styles.links}>
          {navItems.map((item) => {
            const { text, href, title, icon: Icon } = item;
            return (
              <li key={text} className={styles.lists}>
                <NavLink to={href} title={title}>
                  <Icon size="26px" />
                  {!isCollapse && text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button onClick={toggleCollapse} className={styles.collapseBtn}>
          {isCollapse ? (
            <MdChevronRight size="30px" />
          ) : (
            <MdChevronLeft size="30px" />
          )}
        </button>
      </div>
    </section>
  );
};
export default Sidebar;
