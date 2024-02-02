import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: #fff;
  transition: var(--transition);

  &:hover {
    color: var(--hover-color);
  }

  &.active {
    &::after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: #fff;
      border-radius: 12px;
    }
  }
`;
