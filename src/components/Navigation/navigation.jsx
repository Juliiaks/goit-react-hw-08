import { NavLink } from "react-router-dom";
import css from "./navigation.module.css"
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
         <nav className={css.nav}>
            <NavLink to="/" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>Home</NavLink>

        {isLoggedIn && (<NavLink to="/contacts" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>Contacts</NavLink>)}
        
      </nav>
    )
}