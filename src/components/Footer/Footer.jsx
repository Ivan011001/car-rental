import Logo from "../ui/Logo";
import Container from "../ui/Container";

import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterMetaContainer,
  StyledFooterMetaLink,
  StyledFooterMediaContainer,
  StyledFooterMediaIcon,
  StyledFooterContactContainer,
  StyledFooterContactItem,
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

          <StyledFooterMediaContainer>
            <li>
              <a href="">
                <StyledFooterMediaIcon>
                  <use xlinkHref="/sprite.svg#icon-twitter"></use>
                </StyledFooterMediaIcon>
              </a>
            </li>
            <li>
              <a href="">
                <StyledFooterMediaIcon>
                  <use xlinkHref="/sprite.svg#icon-instagram"></use>
                </StyledFooterMediaIcon>
              </a>
            </li>
            <li>
              <a href="">
                <StyledFooterMediaIcon>
                  <use xlinkHref="/sprite.svg#icon-youtube"></use>
                </StyledFooterMediaIcon>
              </a>
            </li>
            <li>
              <a href="">
                <StyledFooterMediaIcon>
                  <use xlinkHref="/sprite.svg#icon-telegram"></use>
                </StyledFooterMediaIcon>
              </a>
            </li>
          </StyledFooterMediaContainer>

          <StyledFooterContactContainer>
            <StyledFooterContactItem>
              Email: <a href="mailto: carrental@rent.com">carrental@rent.com</a>
            </StyledFooterContactItem>
            <StyledFooterContactItem>
              Tel number: <a href="tel:+380730000000">+380730000000</a>
            </StyledFooterContactItem>
            <StyledFooterContactItem>
              Location:{" "}
              <a href="https://maps.app.goo.gl/3xQ9QUjyYEcDiUKw7">Vehicle street, 30</a>
            </StyledFooterContactItem>
          </StyledFooterContactContainer>
        </StyledFooterContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
