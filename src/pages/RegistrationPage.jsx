import { useDispatch } from "react-redux";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { registerOperation } from "../redux/auth/operations";

export default function RegistrationPage() {

    const dispatch = useDispatch();
    
    const registerUser = (userData) => {
dispatch(registerOperation(userData))
    }

    return (
        <div>
            <RegisterForm submit={registerUser} />
        </div>
    )
}