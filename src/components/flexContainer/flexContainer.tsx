import React, { ReactNode } from 'react';
import styled from 'styled-components';

type FlexWrapperProps = {
  // as?: keyof React.JSX.IntrinsicElements;
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  children: ReactNode;
};

export const FlexWrapper = ({ children, ...props }: FlexWrapperProps) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

type StyledContainerProps = {
  // as?: keyof React.JSX.IntrinsicElements;
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
};

const StyledContainer = styled.div<StyledContainerProps>`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.wrap};
`;
