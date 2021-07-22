import styled from "styled-components";

export const Sizes = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

export const Devices = {
  mobile: `{min-width: ${Sizes.mobile}}`,
  tablet: `{min-width: ${Sizes.tablet}}`,
  laptop: `{min-width: ${Sizes.laptop}}`,
  desktop: `{min-width: ${Sizes.desktop}}`,
};

export const Container = styled.div`
  display: ${(props) => (props.flex ? "flex" : "block")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  ${(props) => props.aiCenter && "align-items:center"};
  ${(props) => props.acCenter && "align-content:center"};
  ${(props) => props.jcCenter && "justify-content:center"};
  ${(props) => props.spaceA && "justify-content:space-around"}
  ${(props) => props.spaceB && "justify-content:space-between"}
  ${(props) => props.start && "justify-content:flex-start"}
  ${(props) => props.wrap && "flex-wrap:wrap"}
`;

export const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  :hover {
    opacity: 0.5;
  }
`;

const Theme = {
  colorPurple: "#581845",
  colorStrawberry: "#900C3F",
  colorRed: "#C70039",
  colorOrange: "#FF5733",
  colorYellow: "#FFC30F",
  colorBeige: "#E6D7D2",
};

export const ProjectContainer = styled(Container)`
  height: 28rem;
  width: 22rem;
  border-top-left-radius: 20%;
  border-top-right-radius: 40%;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 30%;
  margin: 2rem;
  box-shadow: -10px 5px 5px rgba(191, 191, 191, 1),
    1em 0 0.4em rgba(232, 232, 232, 1);
`;
export const SmallIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  }
`;

export const NarrowContainer = styled(Container)`
  width: 15rem;
  text-align: justify;
`;

export default Theme;
