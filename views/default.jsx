import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import gUser from '../views/global'

function Default (html) {
    let is_admin_logged_in  = gUser.username === "Admin";
    let is_user_logged_in   = gUser.username !== "";
    return (
        <html>
            <head>
                <title>AirBnB Reviews</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <div style={{"display":"flex"}}>
                    <Navbar style={{"width":"20%","justifyContent":"left"}} id="TopNavBar" bg="primary" variant="dark">
                        <Nav.Link></Nav.Link>
                    </Navbar>
                    <Navbar style={{"width":"60%"}} id="TopNavBar" bg="primary" variant="dark">
                        <Container >
                            <Nav className="m-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/site/new">Add Site</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <Navbar style={{"width":"20%"}} id="TopNavBar" bg="primary" variant="dark">
                        <Container >
                            <Nav className="m-auto">
                                {(!is_admin_logged_in && !is_user_logged_in) ? <Nav.Link href="/user-login/2">Login</Nav.Link> : <Nav.Link href="/user-login/3">Logout</Nav.Link>}
                                {(!is_admin_logged_in && !is_user_logged_in) ? <Nav.Link style={{"marginLeft":"5em"}} href="/user-login/1">Admin</Nav.Link> : ""}
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                {html.children}
            </body>
        </html>
    )
  }

module.exports = Default