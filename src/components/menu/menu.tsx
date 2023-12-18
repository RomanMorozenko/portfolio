import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Menu = () => {
  return (
    <StyledNav>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>services</li>
        <li>portfolio</li>
        <li>contact</li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  ul {
    display: flex;
    gap: 34px;
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.regular};
    font-size: 17px;

    & li:hover {
      cursor: pointer;
      color: ${theme.colors.accent};
    }
  }
`;
