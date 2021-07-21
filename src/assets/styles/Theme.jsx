import styled from 'styled-components';

export const Sizes = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
};

export const Devices = {
  mobile: `{min-width: ${Sizes.mobile}}`,
  tablet: `{min-width: ${Sizes.tablet}}`,
  laptop: `{min-width: ${Sizes.laptop}}`,
  desktop: `{min-width: ${Sizes.desktop}}`,
};

export const Container = styled.div`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  ${(props) => props.aiCenter && 'align-items:center'};
  ${(props) => props.acCenter && 'align-content:center'};
  ${(props) => props.jcCenter && 'justify-content:center'};
  ${(props) => props.spaceA && 'justify-content:space-around'}
`;

const Theme = {
  colorPurple: '#581845',
  colorStrawberry: '#900C3F',
  colorRed: '#C70039',
  colorOrange: '#FF5733',
  colorYellow: '#FFC30F',
};

export default Theme;