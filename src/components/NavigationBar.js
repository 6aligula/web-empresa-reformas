import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../img/logo.jpg'
import './styles/NavigationBar.css'

const NavigationBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <img id='logo' alt='logo' src={logo} />
                <Container>

                    <LinkContainer to='/'>

                        <Navbar.Brand href="/">Reformas Vicent</Navbar.Brand>
                    </LinkContainer>

                </Container>
            </Navbar>
        </header>

    )
}
export default NavigationBar;