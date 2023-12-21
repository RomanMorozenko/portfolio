import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const AboutMe = () => {
  const date = new Date();
  return (
    <StyledArticle>
      <p>
        I&lsquo;m an enthusiastic web developer with 5+ years of experience building websites and
        interfaces using React, Redux (RTK, RTK Query), Next JS, TypeScript, JavaScript, HTML & CSS,
        and SCSS. My strong understanding of web development principles and best practices helps me
        deliver high-quality solutions. I&lsquo;m actively learning Node.js, eager to tackle new
        challenges and contribute to innovative work in the front-end development field.
      </p>
      <ul>
        <li>Name:</li>
        <li>Age:</li>
        <li>Email:</li>
        <li>From:</li>
      </ul>
      <ul>
        <li>Roman Morozenko</li>
        <li>{date.getFullYear() - 1990}</li>
        <li>
          <a href="romamorozenko@gmail.com" type="email">
            romamorozenko@gmail.com
          </a>
        </li>
        <li>Moscow,Russia</li>
      </ul>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  display: flex;
  margin-top: 20px;
  h3 {
    font-size: 40px;
    font-weight: ${theme.fontWeight.regular};
    color: black;
    & span {
      font-weight: ${theme.fontWeight.mediumItalic};
      font-style: italic;
      color: ${theme.colors.accent};
    }
  }

  p {
    color: black;
    font-size: 20px;
    width: 65%;
  }

  ul {
    font-size: 20px;
  }

  ul:first-of-type {
    color: ${theme.colors.accent};
    margin-left: 20px;
  }

  ul:nth-of-type(2) {
    margin-left: 5px;
  }

  span {
    color: ${theme.colors.accent};
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    margin-right: 10px;
  }

  a {
    color: black;
  }

  a:hover {
    color: ${theme.colors.accent};
  }
`;
