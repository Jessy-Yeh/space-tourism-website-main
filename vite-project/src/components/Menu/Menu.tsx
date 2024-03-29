import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        <div className={styles.logoContainer}>
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        {/* <div className={styles.line}></div> */}
        <ul
          className={`${styles[`menu-list`]} ${
            isHamburgerClicked ? styles.menuActive : null
          }`}
        >
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span className={isActive ? styles.active : ""}>
                  <span className={styles.bold}>00</span> HOME
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination/moon">
              {({ isActive }) => (
                <span className={isActive ? styles.active : styles[`not-moon`]}>
                  <span className={styles.bold}>01</span> DESTINATION
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew/commander">
              {({ isActive }) => (
                <span className={isActive ? styles.active : ""}>
                  <span className={styles.bold}>02</span> CREW
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology/launch-vehicle">
              {({ isActive }) => (
                <span className={isActive ? styles.active : ""}>
                  <span className={styles.bold}>03</span> TECHNOLOGY
                </span>
              )}
            </NavLink>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${
            isHamburgerClicked ? styles.menuActive : null
          }`}
          onClick={() => setIsHamburgerClicked((prev) => !prev)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
