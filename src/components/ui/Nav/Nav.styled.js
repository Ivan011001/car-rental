import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  color: #fff;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--hover-color);
  }

  &.active {
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: #fff;
    }
  }
`;
