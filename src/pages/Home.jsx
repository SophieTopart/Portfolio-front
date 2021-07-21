
import Footer from "../components/Footer";
import Theme, { Container } from "../assets/styles/Theme";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HTML from "../assets/images/Html-css-js.png";
import React from "../assets/images/react.png";
import Node from "../assets/images/node.png";
import StyledComp from "../assets/images/styled.png";
import Github from "../assets/images/icons8-github.png";
import Linkedin from "../assets/images/icons8-linkedin.png";
import Time from "../assets/images/icons8-time.png";

const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`;
const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  :hover {
    opacity: 0.5;
  }
`;
const H2 = styled.h2`
  margin: 0 0 3rem 0;
`;

const PaddedDiv = styled(Container)`
  padding: 5rem;
`;
const RoundedDiv = styled(Container)`
  padding: 2rem;
  background: ${Theme.colorBeige};
  border-top-left-radius: 10%;
  border-top-right-radius: 40%;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 30%;
`;

export default function Home() {
  return (
    <>
      
      <Container>
        <PaddedDiv>
          <H2>Mes technos</H2>
          <Container flex spaceA>
            <Logo src={HTML} />
            <Logo src={React} />
            <Logo src={Node} />
            <Logo src={StyledComp} />
          </Container>
        </PaddedDiv>
        <RoundedDiv>
          <H2>Qui suis-je ?</H2>
          <p>
            Après 15 ans consacrés à la traduction audiovisuelle, <br />
            mon amour des langues s'est épanoui <br />
            dans un autre de mes domaines de prédilection, le digital !
          </p>
          <p>
            Une formation intensive en ReactJS et NodeJS plus tard, <br />
            me voilà jetée dans le grand bain. <br />
            <h4>Pour en savoir plus sur mon parcours, c'est par là...</h4>
          </p>
          <Link to="/myself">
            <Icon src={Time} />
          </Link>
          <h4>Ou pour me contacter, c'est par ici !</h4>
          <Container>
            <a
              href="https://github.com/SophieTopart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Github} />
            </a>
            <a
              href="https://www.linkedin.com/in/sophie-topart-59a0b893/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Linkedin} />
            </a>
          </Container>
        </RoundedDiv>
        <Container>
          <h2>Mes projets</h2>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
