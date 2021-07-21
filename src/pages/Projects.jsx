import ArrowIcon from "../assets/styles/Arrow";
import { Container } from "../assets/styles/Theme";
import Project from "../components/Project"

export default function Projects() {
  return (
    <>
      <Container flex start>
        <ArrowIcon />
      </Container>
      <Project />
      <Container flex start>
        <ArrowIcon />
      </Container>
    </>
  );
}
