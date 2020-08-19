import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import Logout from './Logout'


export default function NavBar() {
    return (
        
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Choir Companion</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                
                <Button variant='danger'>
                    <Login />
                </Button>  
                <Button variant='link'>
                    <Logout />
                </Button>
                <Nav.Link href=''>Schedule</Nav.Link>
                <Nav.Link href='https://drive.google.com/drive/folders/1oD3sKUIJ_p_2V1PKR8S3zc2-kQhX0Rqd?usp=sharing'>Docs</Nav.Link>
                <Nav.Link href='https://www.musixmatch.com/'>Find Lyrics</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}




                {/* <Link href="https://drive.google.com/drive/folders/1oD3sKUIJ_p_2V1PKR8S3zc2-kQhX0Rqd?usp=sharing" onClick={preventDefault} color="inherit">
                    Choir Docs
                </Link>
                <Link href="https://www.musixmatch.com/" onClick={preventDefault} color='inherit'>
                    Find Lyrics
                </Link>
            </Typography>
                 */}
