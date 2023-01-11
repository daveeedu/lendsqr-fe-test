import React from "react";
import Sidebar from "../components/others/Sidebar";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
  `,
  MainPage = styled.div`
    margin-left: 21.5%;
    width: 80%;
  `;
export default function Home({ children, bg }) {
  return (
    <Container className="flex">
      <Sidebar />
      <MainPage
      >
        {children}
      </MainPage>
    </Container>
  );
}
