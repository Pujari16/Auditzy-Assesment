import { signWithGoogle } from "./FirebaseAuth";
import React from 'react';
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

    const onClickSignIn = async () => {
        try{
            const {res} = await signWithGoogle();
            if(localStorage.getItem('authStatus') === "true"){
                navigate("/");
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="App">

          {
            <div>
                    <button className="login-with-google-btn" onClick={onClickSignIn}>
                    Sign in with Google
                  </button>
          </div>
          }

        </div>
    );
}

export default Login;
