import styled from 'styled-components';

type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled.h2`
  font-size: 40px;
  text-align: center;
`;
