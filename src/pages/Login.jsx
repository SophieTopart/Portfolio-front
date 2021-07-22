import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Check from "../assets/images/icons8-check.png";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import { Container, SmallIcon } from "../assets/styles/Theme";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const LongContainer = styled(Container)`
  height: 100vh;
`;

export default function Login() {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const history = useHistory();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", { ...data })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("id", res.data.payload.id);
        history.push("/check");
        toast.success(`Well done!`);
      })
      .then((data) => console.log(data))
      .catch((err) => setError(err.message));
  };

  return (
    <form onSubmit={login}>
      <LongContainer flex column jcCenter aiCenter>
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            name="username"
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <SmallIcon src={Check} onClick={login} />
      </LongContainer>
    </form>
  );
}
