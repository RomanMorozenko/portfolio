import styled from 'styled-components';
import { Icon } from '../icon';

type SkillProps = {
  iconId: string;
  skillName: string;
  width: string;
  height: string;
  viewBox: string;
};

export const Skill = ({ iconId, skillName, width, height, viewBox }: SkillProps) => {
  return (
    <StyledSkill>
      <Icon iconId={iconId} width={width} height={height} viewBox={viewBox} />
      <h3>{skillName}</h3>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
