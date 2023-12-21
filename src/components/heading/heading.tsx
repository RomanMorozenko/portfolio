import styled from 'styled-components';

type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled.h2`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
`;
