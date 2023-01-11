import React from 'react'
import Button from '../form/button/Button';
import Input from '../form/input/Input';
import styled from 'styled-components';
import config from "../../utils/config";

import { useNavigate } from "react-router-dom";

const { pageUrls } = config;

const FormWrapper = styled.div`
	align-items: center;
	padding-top: 20%;
	width: 100%;
	height: 100%;
	margin-top: 20px;
	`;

const SignIn = ({
  disabled,
  error,
  setError,
}) => {

  const navigate = useNavigate();
  return (
    <>
    <div className="w-full">
        <div className="w-[183px] h-[55px] ">
          <h1 className="  text-[700] text-5xl text-[#213F7D] ">Welcome!</h1>
          <p className="description mt-4 text-left text-[400] text-[20px]">
         Enter details to login.
        </p>
        </div>
        <FormWrapper>
        <Input 
          placeholder="Email"
          name="email"
          id="email"
          type="email"
          wrapperClass= {"mb-10"}
          required={true}
          onChange={(e) => {
            setError("");
          }}
/>
        <Input 
          placeholder="Password"
          wrapperClass= {"mb-8"}
          name="password"
          id="password"
          type="password"
          required={true}
          onChange={(e) => setError("")}
          inputClass={ error?.includes("Invalid") ? "error" : ""}
    />
    <p className='cursor-pointer text-=[600] text-[16] mb-8 text-[#39CDCC]'>FORGOT PASSWORD?</p>
    <div className="mt-5">
          <Button
            type="submit"
            disabled={disabled}
            btnClass={"h-[60px]"}
            value={disabled ? "Loading..." : "Login"}
            width={"100%"}
            variant={"primary"}
            onClick={_=> navigate(`${pageUrls.dashboard}`)}
          />
        </div>
        </FormWrapper>
    </div>

    </>
  )
}

export default SignIn