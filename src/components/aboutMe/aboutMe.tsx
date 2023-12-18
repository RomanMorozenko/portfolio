import styled from 'styled-components';

export const AboutMe = () => {
  return (
    <article>
      <h3>I&lsquo;m Roman Morozenko a Frontend Developer</h3>
      <StyledP>
        I&lsquo;m a frontend-developer of experience with specializing in building a web
        applications and interfaces using React, Redux (RTK, RTK Query), TypeScript, JavaScript,
        HTML&CSS, and SCSS.With a strong understanding of web development principles and best
        practices, I prioritize writing efficient and scalable code.
      </StyledP>
      <StyledP>
        Continuously expanding my knowledge and skills is a top priority for me as I strive for
        continuous growth in my career. I am always eager to take on new challenges and contribute
        to innovative projects in the front-end development field. I have a keen interest in
        mastering Node.js and Next.js.
      </StyledP>
    </article>
  );
};

const StyledP = styled.p``;
