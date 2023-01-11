import React, { useState } from "react";
import "./input.css";

const Input = ({
	id,
	label,
	icon,
	name,
	placeholder,
	value,
	onChange,
	onBlur,
	onFocus,
	onClick,
	type,
	inputClass = "",
	wrapperClass = "",
	disabled = false,
	maxLength,
	labelClass = "",
	required = false,
	minLength,
	min,
	max,
	rows,
	passwordStrength = { show: false, size: 0, color: "var(--C_danger)" },
	data,
	inputC,
	children,
	readOnly=false,
	error,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className={`custom-input mt-3 text-start ${wrapperClass}`}>
			<div className={`flex justify-between mt-y relative`}>
				{label && (
					<label
						className={`block text-[400] text-[18px] text-[#556777] mb-2 ${labelClass}`}
						htmlFor={id || name}>
						{label}{" "}
						{!disabled && required && (
							<span
								style={{ top: "2px", color: "var(--C_danger)" }}
								className="relative">
								*
							</span>
						)}
					</label>
				)}
				{passwordStrength.show &&
					(data || (
						<span className="passStrength absolute rounded-2xl">
							<span
								className="progress rounded-2xl"
								style={{
									width: passwordStrength.size + "%",
									backgroundColor: passwordStrength.color,
								}}></span>
						</span>
					))}
			</div>

			<div className={`flex items-center input_wrapper mb-1 p-0 ${inputClass}`}>
				<input
					className={`w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${inputC}`}
					type={(type || "text") && showPassword ? "text" : type}
					name={name}
					min={min}
					max={max}
					readOnly={readOnly}
					onClick={onClick}
					value={value}
					onBlur={onBlur}
					onFocus={onFocus}
					id={id || name}
					placeholder={placeholder}
					onChange={onChange}
					disabled={disabled}
					minLength={type === "tel" ? minLength || 10 : minLength}
					maxLength={type === "tel" ? maxLength || 15 : maxLength}
					required={error?false:required}
					rows={ rows || 3}
				/>
				{icon ? (
					icon
				) : type === "password" ? (
					showPassword ? (
                       
                        <span className="cursor-pointer mx-3 text-[#39CDCC] text-[600] text-[16px]"  onClick={(e) => setShowPassword(!showPassword)}>HIDE</span>
						
					) : (
                        
						<span className="cursor-pointer mx-3 text-[#39CDCC] text-[600] text-[16px]" onClick={(e) => setShowPassword(!showPassword)}>SHOW</span>
					)
				) : null}

				{children}
			</div>
			<div className={`text-red-500 text-xs italic ${error?.touched[name] && error?.errors[name]?'visible':'invisible'}`}>
				{error?.touched[name] && error?.errors[name]
					? error?.errors[name]
					: "nil"}
			</div>
		</div>
	);
};
export default Input;
