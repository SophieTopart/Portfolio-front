import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import {
  Container,
  ProjectContainer,
  SmallIcon,
  Image,
  NarrowContainer,
} from "../assets/styles/Theme";
import Github from "../assets/images/icons8-github.png";
import Site from "../assets/images/icons8-site.png";
import Pen from "../assets/images/icons8-stylo.png";
import Trash from "../assets/images/icons8-trash.png";
import Check from "../assets/images/icons8-check.png";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Button,
} from "@material-ui/core";

const AdminContainer = styled(ProjectContainer)`
  height: 40rem;
  width: 25rem;
`;

export default function ProjectAdmin({
  id,
  image,
  title,
  description,
  github,
  deploy,
}) {
  const [readOnly, setReadOnly] = useState(true);
  const [newValues, setNewValues] = useState({
    title,
    description,
  });

  const handleChangeReadOnly = () => {
    readOnly ? setReadOnly(false) : setReadOnly(true);
  };

  const changeInputValue = (e) => {
    setNewValues({
      title,
      description,
      [e.target.name]: e.target.value,
    });
  };

  console.log(newValues);

  const modifyData = () => {
    axios
      .put(`http://portfolio-sophietopart.herokuapp.com/projects/${id}`, newValues)
      .then((res) => {
        console.log("Status :", res.status);
        console.log("Data :", res.data);
        toast.success(`Le projet a été modifié.`);
      })
      .catch((err) => {
        console.err("Something went bad", err);
      });
  };

  const deleteProject = () => {
    axios
      .delete(`https://portfolio-sophietopart.herokuapp.com/projects/${id}`)
      .then(
        (res) => console.log("Status :", res.status),
        toast.success(`Le projet a été supprimé.`)
      )
      .catch((err) => {
        console.err("Something went wrong", err);
        toast.error(`Le projet n'a pu être supprimé : ${err.message}`);
      });
  };

  return (
    <AdminContainer flex column aiCenter jcCenter>
      {readOnly ? (
        <>
          <h2>{title}</h2>
          <Image src={image} alt="image"/>
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
        </>
      ) : (
        <>
          <FormControl>
            <InputLabel htmlFor="image">Image</InputLabel>
            <Input
              id="image"
              name="image"
              value={newValues.image}
              onChange={changeInputValue}
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="title">Title</InputLabel>
            <Input
              id="title"
              name="title"
              value={newValues.title}
              onChange={changeInputValue}
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <TextField
              multiline
              label="Description"
              name="description"
              value={newValues.description}
              onChange={changeInputValue}
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="github">Github</InputLabel>
            <Input
              id="github"
              name="github"
              value={newValues.github}
              onChange={changeInputValue}
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="deploy">Deploy</InputLabel>
            <Input
              id="deploy"
              name="deploy"
              value={newValues.deploy}
              onChange={changeInputValue}
              aria-describedby="my-helper-text"
            />
          </FormControl>
        </>
      )}

      <NarrowContainer flex spaceB>
        <Button onClick={handleChangeReadOnly}>
          {readOnly ? (
            <SmallIcon src={Pen} />
          ) : (
            <SmallIcon src={Check} onClick={modifyData} />
          )}
        </Button>
        <SmallIcon src={Trash} onClick={deleteProject} />
      </NarrowContainer>
    </AdminContainer>
  );
}
