import React, { useState } from 'react'
import "./Login.css";
import SignIn from '../../components/auth/SignIn';
import Consumer from "../../layout/Auth"
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [error, setError] = useState("");
  const navigate = useNavigate();


  return (
    <div>
        <Consumer
						onSubmit
						errorMsg={error}
						>
						<SignIn {...{}} />
						</Consumer>
    </div>
  )
}

export default Login