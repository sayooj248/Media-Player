import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-upload fa-bounce fa-xl me-3" style={{color:"#FFD43B"}}></i>
            {' '}
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header