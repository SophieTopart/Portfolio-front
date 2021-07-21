import styled from "styled-components";
import Theme, { Container } from "../assets/styles/Theme";
import IconsContact from "../assets/styles/Icons";

const RoundDiv = styled(Container)`
  position: absolute;
  background-color: ${Theme.colorStrawberry};
  height: 10rem;
  width: 100vw;
  border-top-left-radius: 50%;
  border-top-right-radius: 10%;
`;
export default function Footer() {
  return (
    <RoundDiv flex aiCenter jcCenter>
      <IconsContact />
    </RoundDiv>
  );
}
