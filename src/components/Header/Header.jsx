import Logo from "../ui/Logo/Logo";
import Nav from "../ui/Nav/Nav";
import Container from "../ui/Container";

import { StyledHeader, StyledHeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderContainer>
          <Logo text />
          <Nav />
        </StyledHeaderContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
