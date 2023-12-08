import iconsSprite from '../../assets/svg/icons-sprite.svg';

type IconPropsType = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  xmlns?: string;
  iconId: string;
};

export const Icon = ({ width, height, viewBox, fill, xmlns, iconId }: IconPropsType) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns={xmlns}>
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  );
};
