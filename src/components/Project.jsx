import styled from "styled-components";
import Theme, { Container, Icon } from "../assets/styles/Theme";
import Github from "../assets/images/icons8-github.png"
import Site from "../assets/images/icons8-site.png"

const ProjectContainer = styled(Container)`
 height: 20rem;
 width: 20rem;
 background: ${Theme.colorBeige};
 border-top-left-radius: 20%;
  border-top-right-radius: 40%;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 30%;
  margin: 2rem;
`
export const SmallIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  }
`;

export default function Projects() {
    return (
        <ProjectContainer>
            <h2>Titre</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deserunt voluptatum tempora voluptate voluptatem sint facere delectus dicta alias omnis voluptatibus molestias itaque laboriosam fuga illum sit ipsam, odit natus.</p>
            <a
        href="https://github.com/SophieTopart"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SmallIcon src={Github} />
      </a>
      <a
        href="https://www.linkedin.com/in/sophie-topart-59a0b893/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SmallIcon src={Site} />
      </a>
        </ProjectContainer>
        
    )
}