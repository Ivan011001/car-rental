import Logo from "../ui/Logo/Logo";
import Nav from "../ui/Nav/Nav";

import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
