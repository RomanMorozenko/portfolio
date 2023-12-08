import styled from 'styled-components';
import { Menu } from '../../components/menu';
import { Logo } from '../../components/logo';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  position: absolute;
  right: 0;
  z-index: 99;
  display: flex;
  background-color: lightcoral;
`;
