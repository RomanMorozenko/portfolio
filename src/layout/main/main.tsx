import styled from 'styled-components';
import { Picture } from '../../components/picture';
import mainPhoto from '../../assets/images/image-cat.jpeg';
import { FlexWrapper } from '../../components/flexContainer';
import { Heading } from '../../components/heading';
import { AboutMe } from '../../components/aboutMe';
import { Skill } from '../../components/skill';
import { Project } from '../../components/project';

export const Main = () => {
  return (
    <MainStyled>
      <section id="hero">
        <div id="circle"></div>
        <FlexWrapper direction="row" justify="space-between" align="center" gap="50px">
          <h1>Hello my name is Roman. I&rsquo;m a web developer</h1>
          <Picture link={mainPhoto} alt={'photo'} width="600" />
        </FlexWrapper>
      </section>
      <section>
        <FlexWrapper direction="column" justify="center">
          <Heading>about me</Heading>
          <AboutMe />
        </FlexWrapper>
      </section>

      <section>
        <FlexWrapper direction="column" justify="center">
          <Heading>my skills</Heading>
          <FlexWrapper>
            <Skill iconId="" skillName="" />
          </FlexWrapper>
        </FlexWrapper>
      </section>

      <section>
        <FlexWrapper direction="column" justify="center">
          <Heading>projects</Heading>
          <FlexWrapper>
            <Project title="" description="" />
          </FlexWrapper>
        </FlexWrapper>
      </section>

      <section>
        <FlexWrapper direction="column" justify="center">
          <Heading>let&lsquo;s cooperate</Heading>
        </FlexWrapper>
      </section>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  & #hero {
    height: 110vh;
    & #circle {
      position: absolute;
      right: -400px;
      top: -380px;
      bottom: 0;
      width: 80vw;
      height: 80vw;
      border-radius: 50%;
      background-image: radial-gradient(circle, #f5f8fa 00%, #d9e2ed 30%);
      background-position: center;
      z-index: 0;
    }
  }
`;
