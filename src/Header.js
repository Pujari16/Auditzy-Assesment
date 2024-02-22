import Logo from "./images/download.png";
import UserImage from "./images/user-profile-icon1.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import React from "react";
import './index.css'
import {useState} from "react";
import {Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";


const Header = () => {

    const [anchorEl, setanchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleOnCLick = (event) =>{
        setanchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setanchorEl(null);

    }
    const handleSignOut = () => {
        setanchorEl(null);
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('profilePic');
        localStorage.removeItem('authToken');
        localStorage.setItem('authStatus', false);
        navigate('/login');
    }

    const handleCloseDetails = () => {
        setanchorEl(null);
        navigate("/user-details")
    }

    return (
        <>
            <div className="head-container">
                <img src={Logo} className="flower-logo"/>

                <div className="mera-labarthi-heading-container">
                    <p className="mera-labarthi-text">Auditzy React Assesment</p>
                </div>
                <div className="image5"></div>
                <div className="col-4">
                    <div className="user-button float-end">
                        <img src={UserImage} alt={"Loading.."} className="user-image"/>
                        <div className="user-text">
                            <p className="user-name-text">{localStorage.getItem('name')}</p>
                        </div>
                        <div id={"user-button"} onClick={handleOnCLick}
                             aria-controls={open ? 'user-menu' : undefined}
                             aria-haspopup={'true'}
                             aria-expanded={open ? 'true' : undefined}>
                            <KeyboardArrowDownOutlinedIcon className="down-arrow-icon"/>
                        </div>
                        <Menu id={"user-menu"} anchorEl={anchorEl} open={open}
                              MenuListProps={{'aria-labelledby' : 'user-button'}}
                              onClose={handleClose}>
                            <MenuItem onClick={handleCloseDetails}>User Info</MenuItem>
                            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
