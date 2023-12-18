import styled from 'styled-components';
import { Icon } from '../icon';

type SkillProps = {
  iconId: string;
  skillName: string;
};

export const Skill = ({ iconId, skillName }: SkillProps) => {
  return (
    <StyledSkill>
      <Icon iconId={iconId} />
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
