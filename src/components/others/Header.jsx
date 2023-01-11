import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { IBell, IDropdown } from "../../utils/icons";
import avatar from "../../assets/images/avatar.png";

const Container = styled.div`
    background: var(--C_white);
  `,
  Avatar = styled.img`
    border-radius: 50%;
  `,
  UserCentre = styled.div`
    svg {
      color: #030d25;
    }
  `,
  HeaderContainer = styled.div`
  `,
  SearchBoxDiv = styled.div`
    border: 1px solid #a5adba;
    width: 600px;
    height: 55px;
    background-color: #39cdcc;
  `,
  SearchBox = styled.input`
    border: 1px solid #a5adba;
  `;

const Header = ({ title, subtitle, children }) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Container className="relative  pt-5 h-[2%] ">
        <HeaderContainer className="flex text-left justify-between items-center px-7">
          <div className="pr-7  flex justify-between items-center">
            <SearchBoxDiv className="w-1/2 h-10 mt-1 bg-white shadow  rounded-lg flex justify-between items-center">
              <SearchBox
                id="search"
                className="w-full h-full rounded-l-lg mr-6 pl-3"
                placeholder="Search for anything"
              />
              <label htmlFor="search" className="cursor-pointer">
                <FiSearch size={"24px"} className="mr-6" />
              </label>
            </SearchBoxDiv>
          </div>

          {children}

          <UserCentre className="flex justify-center items-center ">
            <span className="text-[400] text-[16px] text-[#213F7D] border-b-2 border-[#213F7D] ">
              Docs
            </span>
            <img
              src={IBell}
			  alt="icon"
              className="shadow-sm hover:shadow-md cursor-pointer rounded-full p-2 w-[40px] mx-5"
            />
            <Avatar
              src={avatar}
              alt="avatar"
              className="mx-5 cursor-pointer "
            />
            <span className="text-[500] text-[19px] text-[#213F7D]">
              Adedeji
            </span>
            <img
              src={IDropdown}
			      alt="icon"
              onClick={(e) => setShow(!show)}
              className="ml-3 w-[40px] shadow-sm hover:shadow-md rounded-full cursor-pointer"
            />
          </UserCentre>
        </HeaderContainer>
      </Container>
    </>
  );
};

export default Header;
