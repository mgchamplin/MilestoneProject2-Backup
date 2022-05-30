import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Def (html) {

    return (
        <html>
            <head>
                <title>AirBnB Reviews</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <Navbar id="TopNavBar" bg="primary" variant="dark">
                <Container >
                    <Nav className="m-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/site/new">Add Site</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
                {html.children}
            </body>
        </html>
    )
  }

module.exports = Def

/*
<nav>
                <ul>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li>
                    <a href="/site/new">Add Site</a>
                    </li>
                </ul>
            </nav>
*/