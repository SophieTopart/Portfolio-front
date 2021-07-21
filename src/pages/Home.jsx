import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '../assets/styles/Theme'
import styled from 'styled-components';
import HTML from '../assets/images/Html-css-js.png'
import React from '../assets/images/react.png'
import Node from '../assets/images/node.png'
import StyledComp from '../assets/images/styled.png'

const Logo = styled.img`
width: 5rem;
height: 5rem
`



export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <Container spaceA>
                    <h2>Mes technos</h2>
                    <Logo src={HTML}/>
                    <Logo src={React}/>
                    <Logo src={Node}/>
                    <Logo src={StyledComp}/>
                </Container>
                <Container>
                    <h2>D'où je viens</h2>
                </Container>
                <Container>
                    <h2>Mes projets</h2>
                </Container>             
            </Container>
            <Footer />
            </>
    )
    
}