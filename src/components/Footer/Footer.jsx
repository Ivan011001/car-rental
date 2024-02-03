import Logo from "../ui/Logo";
import Container from "../ui/Container";

import { StyledFooter, StyledFooterContainer } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContainer>
          <Logo />
        </StyledFooterContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
