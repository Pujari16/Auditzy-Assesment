import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { authStatus } from "./service";


const PrivateRoute = () => {

    const [authToken, setAuthToken] = useState(true);

    useEffect(() => {
        const loginStatus = authStatus();
        setAuthToken(loginStatus);
    }, []);

    return (
        authToken ? <Outlet /> : <Navigate to={"/login"} />
    )
}

export default PrivateRoute


