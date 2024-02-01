import { StyledNav, StyledNavLink } from "./Nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </StyledNav>
  );
};

export default Nav;
