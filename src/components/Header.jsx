import styled from 'styled-components'
import Theme from '../assets/styles/Theme'

const RoundHeader = styled.div`
  background: ${Theme.colorPurple};
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   
  &:before {
    content: '';
    position: absolute;
    height: 12px;
    bottom: -12px;
    left: 0;
    right: 0;
    background: ${Theme.colorPurple};
    box-sizing: border-box;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  }
`
const H1 = styled.h1`
margin: 1rem 0 1rem 0;
color: white;
`

const H2 = styled.h2`
margin: 0 0 1rem 0;
color: white;
`

export default function Header() {
    return (
        <RoundHeader>
            <H1>Sophie Topart</H1>
            <H2>Développeuse web junior</H2>
        </RoundHeader>
    )
  
    
}