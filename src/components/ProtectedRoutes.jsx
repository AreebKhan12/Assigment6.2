import { Outlet, Navigate } from "react-router-dom";
import { useStoreContext } from "../contexts/Context";

function ProtectedRoutes() {
    const { signedIn } = useStoreContext();

    return (
        signedIn ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default ProtectedRoutes;