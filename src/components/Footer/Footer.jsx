import Logo from "../ui/Logo";
import Container from "../ui/Container";

import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterMetaContainer,
  StyledFooterMetaLink,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContainer>
          <Logo />

          <StyledFooterMetaContainer>
            <StyledFooterMetaLink
              href="https://github.com/Ivan011001/car-rental"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Privacy Policy
            </StyledFooterMetaLink>
            <StyledFooterMetaLink
              href="https://github.com/Ivan011001/car-rental"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Terms & Conditions
            </StyledFooterMetaLink>
          </StyledFooterMetaContainer>
        </StyledFooterContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
