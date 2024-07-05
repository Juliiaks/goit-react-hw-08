import { useSelector } from "react-redux";
import Authorization from "../Authorization/Authorization";
import NavBar from "../Navigation/navigation";
import UserInfo from "../UserInfo/userInfo";
import { selectLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css"

export default function AppBar() {

    const isLoggedIn = useSelector(selectLoggedIn)

    return (
        <div className={css.header}>
            <NavBar />
            {isLoggedIn ? <UserInfo /> : <Authorization/>}  
        </div>
    )
}