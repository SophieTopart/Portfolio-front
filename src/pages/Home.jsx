import Theme, { Container, Icon } from "../assets/styles/Theme";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HTML from "../assets/images/Html-css-js.png";
import React from "../assets/images/react.png";
import Node from "../assets/images/node.png";
import StyledComp from "../assets/images/styled.png";
import Time from "../assets/images/icons8-time.png";
import Wheel from "../assets/images/icons8-roues.png";
import IconsContact from "../assets/styles/Icons";

const Logo = styled.img`
  width: 5rem;
  height: 5rem;
`;

const H2 = styled.h2`
  margin: 0 0 3rem 0;
`;

const PaddedDiv = styled(Container)`
  padding: 3rem 3rem 1rem 3rem;
  height: 15rem;
`;

const MarginDiv = styled(PaddedDiv)`
  height: 20rem;
  margin-bottom: 3rem
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
            <IconsContact />
          </Container>
        </RoundedDiv>
        <MarginDiv>
          <h2>Mes projets</h2>
          <p>
            L'un des credo de la Wild Code School, <br />
            c'est la pédagogie inversée, et donc l'apprentissage par la
            pratique. <br />
            Au cours de ma formation, nous avons pu réaliser trois projets,
            <br />
            dont un professionnel, selon les demandes de notre cliente. <br />
            Nous avons également participé à deux hackathons.
          </p>
          <h4>N'hésitez pas à aller les étudier en détail !</h4>
          <Link to="/projects">
            <Icon src={Wheel} />
          </Link>
        </MarginDiv>
      </Container>
    </>
  );
}
