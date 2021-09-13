import styled from "styled-components";
import Theme, {
  Container,
  ProjectContainer,
  SmallIcon,
  Image,
  NarrowContainer,
} from "../assets/styles/Theme";
import Github from "../assets/images/icons8-github.png";
import Site from "../assets/images/icons8-site.png";

const BeigeProjectContainer = styled(ProjectContainer)`
  background: ${Theme.colorBeige};
`;

export default function Project({ image, title, description, github, deploy }) {
  return (
    <BeigeProjectContainer flex column aiCenter jcCenter>
      
      <h2>{title}</h2>
      <Image src={image} />
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
