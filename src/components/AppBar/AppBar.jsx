import { useSelector } from "react-redux";
import Authorization from "../Authorization/Authorization";
import NavBar from "../Navigation/navigation";
import UserInfo from "../UserInfo/userInfo";
import { selectLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
    const isLoggedIn = useSelector(selectLoggedIn)
    return (
        <div>
            <NavBar />
            {isLoggedIn ? <UserInfo /> : <Authorization/>}  
        </div>
    )
}