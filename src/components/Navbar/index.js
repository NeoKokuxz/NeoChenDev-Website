import React from "react";
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLinks to="display" smooth={true}
                duration={500}
                spy={true} exact="true"
                offset={-80}>
                  <NavLogo>NEO</NavLogo>
          </NavLinks>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"smooth={true}
                duration={500}
                spy={true} exact="true"
                offset={-80}>About</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="projects" smooth={true}
                duration={500}
                spy={true} exact="true"
                offset={-80}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resume" smooth={true}
                duration={500}
                spy={true} exact="true"
                offset={-80}>Resume</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/email" smooth={true}
              duration={500}
              spy={true} exact="true"
              offset={-80}>Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
