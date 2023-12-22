import styled from 'styled-components';

type PictureProps = {
  link: string;
  width?: string;
  height?: string;
};

export const Picture = ({ link, width, height }: PictureProps) => {
  return <PictureStyled link={link} width={width || ''} height={height || ''} />;
};

type PictureStyledProps = {
  width: string;
  height: string;
  link: string;
};

const PictureStyled = styled.div<PictureStyledProps>`
  /* z-index: 1; */
  /* width: ${(props) => props.width}px;
  height: ${(props) => props.height}px; */
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.link});
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;
`;
