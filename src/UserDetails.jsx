import Header from "./Header";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const UserDetails = () => {

    const [userDetails, setUserDetails] = useState();
    const navigate = useNavigate();

    const handleProducts = () => {
        navigate('/');
    }

    const handleLogout = () =>{
        setUserDetails({});
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('profilePic');
        localStorage.removeItem('authToken');
        localStorage.setItem('authStatus', false);
        navigate('/login');
    }

    useEffect(() => {
        const user = {
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            photo: localStorage.getItem("profilePic")
        }
        setUserDetails(user);
    }, []);

    return (
        <>
            <Header />
            <button className={"btn btn-warning products-button"} onClick={handleProducts}>
                <span className={"arrow"}> ←</span> Go to Products
            </button>
            <div className={"profile-container"}>
                <img src={userDetails?.photo} alt={"Loading"} className={"user-profile"}/>
                <div className={"user-info-container"}>
                    <p className={"title-text"}>{userDetails?.name}</p>
                    <p className={"user-email"}>{userDetails?.email}</p>
                </div>
                <button className={"logout-button btn btn-primary"}
                onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default UserDetails;
