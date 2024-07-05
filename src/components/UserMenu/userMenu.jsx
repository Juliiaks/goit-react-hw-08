import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../redux/auth/operations"
import { selectUser } from "../../redux/auth/selectors"
import css from "./userInfo.module.css"

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    return (
        <div className={css.info}>
            <p className={css.text}>Welcome, {user.name }</p>
            <button type="button" onClick={() => dispatch(logOut())} className={css.btn}>Log Out</button>
        </div>
    )
}