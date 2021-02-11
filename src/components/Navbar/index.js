import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ({ toggle, navColor}) => {
  
  const [color, setColor ] = useState('#646c74')

  // const changeBackground = () => {
  //   if(window.scrollY >= 898 && window.scrollY <= 1997){
  //     //section = 'about'
  //     setColor('#646c74')
  //   }
  //   else if(window.scrollY >= 1998 && window.scrollY <= 3097) {
  //     //section = 'project'
  //     setColor('#051323')

  //   }
  //   else if(window.scrollY >= 3098) {
  //     //section = 'resume'
  //     setColor('#646c74')
  //   }
  // }

  // window.addEventListener('scroll', changeBackground)

  return (
      <Nav style={{backgroundColor: navColor}}>
        <NavbarContainer>
          <NavLinks to="display" smooth={true}
                duration={500}
                spy={true} exact="true"
                offset={-80}><NavLogo>NEO</NavLogo>
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
            <NavItem>
              <NavLinks to="projects" smooth={true}
                duration={500}
                spy={true} exact="true"
                offset={-80}>Projects</NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks to="skills" smooth={true}
                duration={500}
                spy={true} exact="true"
                offset={-80}>Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resume" smooth={true}
                duration={500}
                spy={true} exact="true"
                offset={-80}>Resume</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/email">Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
  );
};

export default Navbar;
