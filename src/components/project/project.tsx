import styled from 'styled-components';
import { Heading } from '../heading';
import { Picture } from '../picture';

type ProjectProps = {
  title: string;
  description: string;
};

export const Project = ({ title, description }: ProjectProps) => {
  return (
    <div>
      <Picture link="" alt="" width="" />
      <Heading>{title}</Heading>
      <StyledP>{description}</StyledP>
    </div>
  );
};

const StyledP = styled.p``;
