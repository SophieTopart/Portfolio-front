import styled from "styled-components";
import Theme from "../assets/styles/Theme";

const RoundHeader = styled.div`
  background: ${Theme.colorPurple};
  height: 10rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 40%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5)
  }
`;
const H1 = styled.h1`
  margin: 2rem 0 1rem 0;
  color: white;
`;

const H2 = styled.h2`
  margin: 0 0 2rem 0;
  color: white;
`;

export default function Header() {
  return (
    <RoundHeader>
      <H1>Sophie Topart</H1>
      <H2>Développeuse web junior</H2>
    </RoundHeader>
  );
}
