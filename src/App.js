import React, { Fragment, Component } from 'react';
import { Nav, Navbar, Container, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';

import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const StylesNav = styled.div`
    .navbar{
        background-color: black;
        position: relative;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;
        &:hover {
            color:white;
        }
    }

`;
const StylesFoo = styled.footer`
    .con-color {
        background-color: black;
        position:relative; 
        bottom: 0; 
        width: 100%;
    }
    
`;
const StylesJum = styled.div`
    .jumbo {
        background: url(https://www.pixelstalk.net/wp-content/uploads/2016/04/Blue-rose-wallpaper-HD.jpg) no-repeat;
        background-color: #000;
        color: #fff;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .tit {
        font-family: 'EB Garamond', serif;
        font-size: 69px;
    }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <StylesNav>
          <Navbar expand="lg fixed-top">
            <Navbar.Brand href="/">Poemas del Alma</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </StylesNav>

        <StylesJum>
          <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
              <h1 className="tit">Bienvenido</h1>
              <p>Podra leer todos los mejores poemas de mi autoria desde este portal</p>
            </Container>
          </Jumbo>
        </StylesJum>

        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>

        <StylesFoo>
          <footer className="footer mt-auto py-3 con-color">
            <div className="container">
              <span className="text-muted">Pagina con licencia CC</span>
            </div>
          </footer>
        </StylesFoo>
      </Fragment>

    );
  }

}

export default App;