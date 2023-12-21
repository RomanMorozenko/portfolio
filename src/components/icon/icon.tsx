import styled from 'styled-components';

type IconPropsType = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  xmlns?: string;
  iconId: string;
  color?: string;
};

export const Icon = ({ width, height, viewBox, fill, xmlns, iconId }: IconPropsType) => {
  return (
    <SvgWrapper>
      <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns={xmlns}>
        <use xlinkHref={`#${iconId}`} />
      </svg>
    </SvgWrapper>
  );
};

const SvgWrapper = styled.div`
  svg {
  }
`;
