import styled from 'styled-components';
import { Picture } from '../../components/picture';
import mainPhoto from '../../assets/images/image-cat.jpeg';
import { FlexWrapper } from '../../components/flexContainer';
import { Heading } from '../../components/heading';
import { AboutMe } from '../../components/aboutMe';
import { Skill } from '../../components/skill';
import { Project } from '../../components/project';
import { TypeAnimation } from 'react-type-animation';
import { theme } from '../../styles/theme';

export const Main = () => {
  return (
    <MainStyled>
      <section id="hero">
        <div id="circle"></div>
        <FlexWrapper direction="row" justify="space-between" align="center" gap="50px">
          <div id="headingWrapper">
            <h1>
              Hello my name is Roman.
              <br /> I&rsquo;m a web developer
            </h1>
            <TypeAnimation
              sequence={[
                'React',
                1000,
                'Redux',
                1000,
                'Next JS',
                1000,
                'JavaScript',
                1000,
                'HTML',
                1000,
                'CSS',
                1000
              ]}
              speed={10}
              style={{ fontSize: '2em', minWidth: '100%', color: `${theme.colors.accent}` }}
              repeat={Infinity}
            />
          </div>
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
          <FlexWrapper wrap="wrap">
            <Skill
              iconId="react"
              skillName="React"
              height="128"
              viewBox="0 0 512 512"
              width="128"
            />
            <Skill
              iconId="redux"
              skillName="Redux"
              height="128"
              viewBox="0 0 256 244"
              width="128"
            />
            <Skill
              iconId="next"
              skillName="Next JS"
              height="128"
              viewBox="0 0 512 309"
              width="128"
            />
            <Skill
              iconId="ts"
              skillName="TypeScript"
              width="128"
              height="128"
              viewBox="0 0 256 256"
            />
            <Skill
              iconId="node"
              skillName="Node JS"
              height="128"
              width="128"
              viewBox="0 0 256 289"
            />
            <Skill
              iconId="js"
              skillName="JavaScript"
              width="128"
              height="128"
              viewBox="0 0 256 256"
            />
            <Skill iconId="jest" skillName="Jest" width="128" height="128" viewBox="0 0 256 283" />
            <Skill
              iconId="git"
              skillName="Git/Github"
              width="128"
              height="128"
              viewBox="0 0 256 256"
            />
            <Skill iconId="css" skillName="CSS" height="128" width="128" viewBox="0 0 384 512" />
            <Skill iconId="sass" skillName="Sass" height="128" width="128" viewBox="0 0 640 512" />
            <Skill
              iconId="material"
              skillName="Material UI"
              height="128"
              width="128"
              viewBox="0 0 24 24"
            />
            <Skill
              iconId="ant"
              skillName="Ant Design"
              height="128"
              width="128"
              viewBox="0 0 1024 1024"
            />
            <Skill iconId="html" skillName="HTML" height="128" width="128" viewBox="0 0 384 512" />
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
  #headingWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  section {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  h1 {
    font-size: 50px;
    font-weight: ${theme.fontWeight.semibold};
    width: 100%;
    color: black;
  }

  h2 {
    margin: 0;
  }

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
