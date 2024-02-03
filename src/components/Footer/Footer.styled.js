import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--accent-color);
  padding: 32px 0px;
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFooterMetaContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledFooterMetaLink = styled.a`
  color: #fff;

  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--hover-color);
  }
`;
