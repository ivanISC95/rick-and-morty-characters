import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from '../../img/icon.gif';
import ListOfCharacters from '../../components/ListOfCharacters/ListOfCharacters';
import '../../App.css';
import Carrusel from '../../components/Carousel/Carousel';
import getData from '../../servicces/getData';
export default function Inicio() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        getData().then(datas => setData(datas));
    },[])
    return (
        <div >
            <Router>
                <Navbar ccollapseOnSelect expand="lg" lassName='navbar' variant="dark" >
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={logo} className='navbar-icon' alt='Logo' />
                            Rick & Morty Characters</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/Characters">Characters</Nav.Link>
                                <Nav.Link href="#link">Search Characters</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes >
                    <Route path='/' element={<Carrusel data={data} />} />
                    <Route path='/Characters' element={<ListOfCharacters data={data}/>} />
                </Routes>
            </Router>
        </div>
    )
}