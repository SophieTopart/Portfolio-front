import styled from "styled-components";
import Theme, { Container, Icon } from "../assets/styles/Theme";
import Github from "../assets/images/icons8-github.png";
import Site from "../assets/images/icons8-site.png";

const ProjectContainer = styled(Container)`
  height: 28rem;
  width: 22rem;
  background: ${Theme.colorBeige};
  border-top-left-radius: 20%;
  border-top-right-radius: 40%;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 30%;
  margin: 2rem;
`;
export const SmallIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  }
`;

const NarrowContainer = styled(Container)`
  width: 15rem;
  text-align: justify;
`;

export default function Projects({ title, description, github, deploy }) {
  return (
    <ProjectContainer flex column aiCenter jcCenter>
      <h2>{title}</h2>
      <NarrowContainer>
        <p>{description}</p>
      </NarrowContainer>
      <Container block>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <SmallIcon src={Github} />
          </a>
        )}

        {deploy && (
          <a href={deploy} target="_blank" rel="noopener noreferrer">
            <SmallIcon src={Site} />
          </a>
        )}
      </Container>
    </ProjectContainer>
  );
}
