import { NavLink } from "react-router-dom";
import css from "./auth.module.css"
import clsx from "clsx";

export default function Authorization() {
    return (
        <div className={css.auth}> 
        <NavLink to="/login" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>Login</NavLink>
        <NavLink to="/register" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive)
        }}>Register</NavLink>
        </div>
    )
}