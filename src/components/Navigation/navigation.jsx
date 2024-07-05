import { NavLink } from "react-router-dom";
import css from "./navigation.module.css"
import clsx from "clsx";


export default function NavBar() {
    return (
         <nav className={css.nav}>
            <NavLink to="/" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>Home</NavLink>
        <NavLink to="/contacts" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>Contacts</NavLink>
      </nav>
    )
}