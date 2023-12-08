import styled from 'styled-components';

type PicturePropsType = {
  link: string;
};

export const Picture = ({ link }: PicturePropsType) => {
  return <PictureStyled src={link} />;
};

const PictureStyled = styled.img``;
