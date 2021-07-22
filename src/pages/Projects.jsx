import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowIcon from "../assets/styles/Arrow";
import Circle from "../assets/images/icons8-circle.png";
import { Container, Icon } from "../assets/styles/Theme";
import Project from "../components/Project";

const InvisibleIcon = styled(Icon)`
  opacity: 0;
`;

export default function Projects() {
  const [project, setProject] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      try {
        const project = await axios.get("http://localhost:8000/projects");
        setProject(project.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getProject();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Container flex start>
        <ArrowIcon />
      </Container>

      <Container flex jcCenter wrap>
        {project.map((project, i) => {
          return (
            <Project
              key={i}
              id={project.id}
              title={project.title}
              description={project.description}
              github={project.github}
              deploy={project.deploy}
            />
          );
        })}
      </Container>
      <Link to="/login">
        <InvisibleIcon src={Circle} />
      </Link>
      <Container flex start>
        <ArrowIcon />
      </Container>
    </>
  );
}
