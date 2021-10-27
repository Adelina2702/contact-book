import React from 'react';
import { Navbar,  Container, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="danger" variant="dark">
            <Container>
                   <img  style={{width:"40px"}}src="https://cdn-icons.flaticon.com/png/512/1436/premium/1436428.png?token=exp=1635335826~hmac=0cdae6cfe6b7dec4d8a591633920a702"></img>
                <Navbar.Brand href="#home">Contact-Book</Navbar.Brand>
            </Container>
        </Navbar>
    );
};
export default Header;