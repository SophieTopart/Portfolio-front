import styled from "styled-components";
import Theme, { Container } from "../assets/styles/Theme";

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

export default function Projects() {
    return (
        <ProjectContainer></ProjectContainer>
        
    )
}