import styled from 'styled-components';

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
  ul {
    display: flex;
    gap: 34px;
  }
`;
