import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Great Quotes</h2>
      <nav className={classes.nav}>
        <ul>
          <NavLink
            to="/quotes"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <li>All Quotes</li>
          </NavLink>

          <NavLink
            to="/new-quote"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            <li>Add a Quote</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
