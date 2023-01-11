import React from "react";
import { IError,  IMainLogo, IPablo } from "../utils/icons";
// import config from "../utils/config"

const Consumer = ({children, component, onSubmit, errorMsg }) => {
	return (
		<>
			<div className="App bg-custom auth__page">
				<div className="layout-custom">
					<div className="h-100 m-0">
						<div className="hammer-wrapper">
							<div className="overlay">
								<div className="flex justify-center align-center mt-20 brand">
									<img src={IMainLogo} alt="logo" className="logo__img mr-3" />
									<div className="">
                                        <img src={IPablo} alt="logo" className="logo__img2  mr-3" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full relative">
						{errorMsg && (
							<div className="error__msg flex justify-center items-center p-2">
								{" "}
								<img src={IError} alt="error" className="mr-2" />{" "}
								<p>{ errorMsg }</p>
							</div>
						)}
						<div className="h-full flex flex-col pt-24 items-center">
							<form className="login-form w-3/4  px-20 py-2" onSubmit={onSubmit}>
								{component||children}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Consumer;