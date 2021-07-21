import styled from "styled-components";
import Theme from "../assets/styles/Theme";

const RoundDiv = styled.div`
  position: absolute;
  bottom: -80%;
  left: -20%;
  background-color: ${Theme.colorStrawberry};
  height: 40%;
  width: 300%;
  border-radius: 50%;

  &:before {
    content: "";
    position: absolute;
    height: 10rem;
    bottom: -12px;
    left: 0;
    right: 0;
    background: ${Theme.colorStrawberry};
  }
`;
export default function Footer() {
  return <RoundDiv></RoundDiv>;
}
