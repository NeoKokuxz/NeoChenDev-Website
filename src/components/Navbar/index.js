import React from "react";
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">NEO</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resume">Resume</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/email">Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
