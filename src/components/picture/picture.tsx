import styled from 'styled-components';

type PictureProps = {
  link: string;
  alt: string;
  width: string;
};

export const Picture = ({ link, alt, width }: PictureProps) => {
  return <PictureStyled src={link} alt={alt} width={width} />;
};

type PictureStyledProps = {
  width: string;
};

const PictureStyled = styled.img<PictureStyledProps>`
  border-radius: 50%;
  margin-top: 50px;
  z-index: 1;
  width: ${(props) => props.width}px;
`;
