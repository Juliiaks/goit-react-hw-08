import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/userMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css"
import Navigation from "../Navigation/navigation";

export default function AppBar() {

    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <div className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav/>}  
        </div>
    )
}