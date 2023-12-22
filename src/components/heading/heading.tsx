import styled from 'styled-components';
import { theme } from '../../styles/theme';

type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled.h2`
  margin-top: 50px;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 55px;
    height: 2px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
  }
`;
