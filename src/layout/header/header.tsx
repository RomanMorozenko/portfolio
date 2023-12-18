import styled from 'styled-components';
import { Menu } from '../../components/menu';
import { Logo } from '../../components/logo';
import { FlexWrapper } from '../../components/flexContainer';

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper justify="end">
        {/* <Logo /> */}
        <Menu />
      </FlexWrapper>
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
`;
