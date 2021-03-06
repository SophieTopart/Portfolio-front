import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ProjectAdmin from "../components/ProjectAdmin";
import {
  Container,
  ProjectContainer,
  NarrowContainer,
  SmallIcon,
} from "../assets/styles/Theme";
import Check from "../assets/images/icons8-check.png";
import Logout from "../assets/images/icons8-logout.png";
import { FormControl, InputLabel, Input, TextField } from "@material-ui/core";

export default function Admin() {
  const [project, setProject] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const getProject = async () => {
      try {
        const project = await axios.get("https://portfolio-sophietopart.herokuapp.com/projects");
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

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data);

  const createProject = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios.post("https://portfolio-sophietopart.herokuapp.com/projects", { ...data });
      toast.success("Le projet a été rajouté.");
    } catch (err) {
      console.log(err);
      toast.error(`Le projet n'a pu être rajouté : ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    window.localStorage.clear();
  };

  return (
    <>
      {localStorage.id && (
        <>
          <Container flex end>
            <Link to="/projects">
              <SmallIcon src={Logout} onClick={handleLogout} />
            </Link>
          </Container>
          <Container flex jcCenter wrap>
            {project.map((project, i) => {
              return (
                <ProjectAdmin
                  key={i}
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  deploy={project.deploy}
                />
              );
            })}
          </Container>
          <Container flex jcCenter>
            <ProjectContainer flex column jcCenter aiCenter>
              <NarrowContainer>
                <form onSubmit={createProject}>
                  <FormControl>
                    <InputLabel htmlFor="image">Image</InputLabel>
                    <Input
                      id="Image"
                      name="image"
                      onChange={onChangeData}
                      aria-describedby="my-helper-text"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input
                      id="Title"
                      name="title"
                      onChange={onChangeData}
                      aria-describedby="my-helper-text"
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      multiline
                      label="Description"
                      name="description"
                      onChange={onChangeData}
                      aria-describedby="my-helper-text"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="Github">Github</InputLabel>
                    <Input
                      id="Github"
                      name="github"
                      onChange={onChangeData}
                      aria-describedby="my-helper-text"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="Deploy">Deploy</InputLabel>
                    <Input
                      id="Deploy"
                      name="deploy"
                      onChange={onChangeData}
                      aria-describedby="my-helper-text"
                    />
                  </FormControl>
                  <SmallIcon src={Check} onClick={createProject} />
                </form>
              </NarrowContainer>
            </ProjectContainer>
          </Container>
        </>
      )}
    </>
  );
}
