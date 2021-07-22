import styled from "styled-components";
import Theme, {
  Container,
  ProjectContainer,
  SmallIcon,
  NarrowContainer,
} from "../assets/styles/Theme";
import Github from "../assets/images/icons8-github.png";
import Site from "../assets/images/icons8-site.png";

const BeigeProjectContainer = styled(ProjectContainer)`
  background: ${Theme.colorBeige};
`;

export default function Project({ title, description, github, deploy }) {
  return (
    <BeigeProjectContainer flex column aiCenter jcCenter>
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
    </BeigeProjectContainer>
  );
}
