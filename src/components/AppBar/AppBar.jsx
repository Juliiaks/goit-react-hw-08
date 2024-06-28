import Authorization from "../Authorization/Authorization";
import NavBar from "../Navigation/navigation";
import UserInfo from "../UserInfo/userInfo";

export default function AppBar() {
    return (
        <div>
            <NavBar/>
            <UserInfo />
            <Authorization/>
        </div>
    )
}