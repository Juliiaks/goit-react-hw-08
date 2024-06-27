import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
         <nav className={css.header}>
            <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    )
}