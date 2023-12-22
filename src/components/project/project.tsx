import styled from 'styled-components';
// import { Heading } from '../heading';
import { Picture } from '../picture';

type ProjectProps = {
  title: string;
  description: string;
  imageLink: string;
};

export const Project = ({ title, description, imageLink }: ProjectProps) => {
  return (
    <ProjectContainer>
      <Picture link={imageLink} />
      <h3 id="projectTitle">{title}</h3>
      <StyledP>{description}</StyledP>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  width: 30%;
  /* overflow-wrap: break-word; */
  #projectTitle {
    font-size: 20px;
  }
`;

const StyledP = styled.p``;
