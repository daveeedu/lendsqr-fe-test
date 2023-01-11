/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IMainLogo } from "../../utils/icons";
import Storage from "../../utils/storage";
import config from "../../utils/config";

import { Link, useLocation} from "react-router-dom";
import { linksDash, links, linksTwo, linksThree} from "../../utils/linkTree";



const SidebarSection = styled.div`
		background-color: var(--C_white);
		color: #2B6112;
		width: 21%;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
	`,
	Logo = styled.img`
		width: 144px;
		height: 30px;
	`,
	LogoWrapper = styled.div`
		display: flex;
		align-items: center;
	`,
	TitleContainer = styled.div``,
	Title = styled.h1`
	`,
	SubTitle = styled.h2`
		font-size: 10px;
	`,
	SidebarLinksWrapper = styled.div`
	    color: var(--c_gray);
		margin-bottom: 10%;
		.active {
			color: var(--C_secondary);
			background-color: var(--c_success_hover);
			width: 100%;
			border-left: 2px solid var(--C_black_lite);
		}
	`,
	SidebarLinks = styled.div`
	   
		&:hover {
			width: 100%;
		}
		span {
			font-weight: 400;
			line-height: 19px;
			font-size: 15px;
		}
		.accordion-active {
			display: block !important;
        }
	`

const Sidebar = () => {
	const 
    location = useLocation(),
	[activeLink, setActiveLink] = useState(location.pathname);
        

	useEffect(() => {
		setActiveLink(location.pathname);
	}, []);
	

	return (
		<SidebarSection className="pt-14  fixed h-screen  top-0 sidebar scroll">
			<LogoWrapper className="flex items-center gap-2 ml-5">
				<Logo src={IMainLogo} alt="logo" />
				<TitleContainer className="flex flex-col justify-start">
					<Title className="leading-4 text-sm font-medium">
						{/* {config.appName} */}
					</Title>
					<SubTitle className="leading-4 text-left font-normal">
						{/* {config.appMotto} */}
					</SubTitle>
				</TitleContainer>
			</LogoWrapper>

			<SidebarLinksWrapper className=" flex flex-col gap-4 mt-14 justify-between linkWrapper">
				{linksDash.map((link, index) => {
					const currentUrl =
					activeLink.indexOf(link.url) > -1
					? true
					: false
					return (
							<SidebarLinks
								key={index}
								className={`${currentUrl ? "active" : ""} py-6`}>
									<Link to={link.url || ""}>
										<div className="flex items-center cursor-pointer">
											{link.icon}
											<span className="text-lg">{link.name}</span>
											{link.iconTwo}
										</div>
									</Link>
							</SidebarLinks>
						)
					
				})}
			</SidebarLinksWrapper>
			
			<SidebarLinksWrapper className=" flex flex-col gap-4 mt-14 justify-between linkWrapper">
			<h1 className="text-[500] text-[14px] text-[#545F7D] ml-8">CUSTOMERS</h1>
				{links.map((link, index) => {
					const currentUrl =
					activeLink.indexOf(link.url) > -1
					? true
					: false
					return (
							<SidebarLinks
								key={index}
								className={`${currentUrl ? "active" : ""} py-2`}>
									<Link to={link.url || ""}>
										<div className="flex items-center cursor-pointer">
											{link.icon}
											<span className="text-lg">{link.name}</span>
										</div>
									</Link>
							</SidebarLinks>
						)
					
				})}
			</SidebarLinksWrapper>

			<SidebarLinksWrapper className=" flex flex-col gap-6 mt-14 justify-between linkWrapper">
			<h1 className="text-[500] text-[14px] text-[#545F7D] ml-8">BUSINESSES</h1>
				{linksTwo.map((link, index) => {
					const currentUrl =
					activeLink.indexOf(link.url) > -1
					? true
					: false
					return (
							<SidebarLinks
								key={index}
								className={`${currentUrl ? "active" : ""} py-2`}>
									<Link to={link.url || ""}>
										<div className="flex items-center cursor-pointer">
											{link.icon}
											<span className="text-lg">{link.name}</span>
										</div>
									</Link>
							</SidebarLinks>
						)
					
				})}
			</SidebarLinksWrapper>

			<SidebarLinksWrapper className=" flex flex-col gap-6 mt-14 justify-between linkWrapper">
			<h1 className="text-[500] text-[14px] text-[#545F7D] ml-8">SETTINGS</h1>
				{linksThree.map((link, index) => {
					const currentUrl =
					activeLink.indexOf(link.url) > -1
					? true
					: false
					return (
							<SidebarLinks
								key={index}
								className={`${currentUrl ? "active" : ""} py-2`}>
									<Link to={link.url || ""}>
										<div className="flex items-center cursor-pointer">
											{link.icon}
											<span className="text-lg">{link.name}</span>
										</div>
									</Link>
							</SidebarLinks>
						)
					
				})}
			</SidebarLinksWrapper>

		</SidebarSection>
	);
};

export default Sidebar;
