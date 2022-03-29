import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0px;
  background-color: #FF5733
`;
const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
`;
const StyledLi = styled.li`
  display: block;
  padding: 14px 20px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
class NavBar extends React.Component {
  render() {
    return (
      <StyledNav>
        <StyledUl>
          <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
          <StyledLi><StyledLink to="/menu">Explore Food Menu</StyledLink></StyledLi>
        </StyledUl>
      </StyledNav>
    );
  }
}
export default NavBar;
