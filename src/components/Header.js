import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import styled from "styled-components"

const Header = () => {
  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${event.currentTarget.innerHTML}`
    )
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <header>
      <StyledAppBar position="relative">
        <StyledToolbar>
          <StyledNavLink onClick={handleClick}>Home</StyledNavLink>
          <StyledNavLink onClick={handleClick}>Projects</StyledNavLink>
          <StyledNavLink onClick={handleClick}>About</StyledNavLink>
        </StyledToolbar>
      </StyledAppBar>
    </header>
  )
}

const StyledToolbar = styled(Toolbar)`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
`
const StyledAppBar = styled(AppBar)`
  // transform: rotate(45deg) translate(50%, -50%);
  // overflow: hidden;
  // height: 50vh;
  background: #2858c7;
`
const StyledNavLink = styled.a`
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  outline: white;
  font-size: 1.2em;
  text-transform: uppercase;

  letter-spacing: 0.1em;
  display: inline-block;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2.3px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    cursor: pointer;
  }
`

export default Header
