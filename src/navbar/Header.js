import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <h3>IConnect</h3>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 1rem;
    width: 1rem;
  }
`;
export default Header;
