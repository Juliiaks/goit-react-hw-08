import { useDispatch } from "react-redux";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { registerOperation } from "../redux/auth/operations";

export default function RegistrationPage() {

    const dispach = useDispatch();
    
    const register = (userData) => {
dispach(registerOperation(userData))
    }

    return (
        <div>
            <RegisterForm submit={register} />
        </div>
    )
}