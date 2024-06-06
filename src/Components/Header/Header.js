import React from 'react'
import styled from 'styled-components';
import './Header.css'

const HeaderNav = styled.nav`
  background-color: ${(props) => props.theme.headerBg};
  padding: 10px 20px;
`;

const HeaderMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const HeaderItem = styled.li`
  color: ${(props) => props.theme.text};
  font-size: 18px;
  text-transform: uppercase;
`;

const ThemeSwitcher = styled.button`
  background-color: ${(props) => props.theme.headerBg};
  color: ${(props) => props.theme.text};
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: auto;
`;

export default function Header(props) {
  return (
    // <nav className="header-nav">
    // <ul className="header-menu">
    <HeaderNav>
    <HeaderMenu>
    <HeaderItem>{props.home}</HeaderItem>
        <HeaderItem>{props.about}</HeaderItem>
        <HeaderItem>{props.contact}</HeaderItem>
        <HeaderItem>{props.profile}</HeaderItem>
        <HeaderItem><ThemeSwitcher onClick={props.themeToggler}>Toggle Theme</ThemeSwitcher></HeaderItem> 
      </HeaderMenu>
    </HeaderNav>
  )
}
