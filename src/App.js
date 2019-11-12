import React, { Fragment, Component } from 'react';
import { Nav, Navbar, Container, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const StylesNav = styled.div`
    .navbar{
        background-color: #3e4f6a;
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
        background: url(https://amazingpict.com/wp-content/uploads/2014/05/Free-Backgrounds-Future-City.jpg) no-repeat;
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
        font-size: 65px;
    }
`;


class App extends Component {
  render() {
    return (
      <Fragment>
        <StylesNav>
          <Navbar expand="lg fixed-top">
            <Navbar.Brand href="/">Mi primer blog con React Js</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="https://www.facebook.com/ramon.themax">Facebook</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="https://www.linkedin.com/in/ramon-alejandrino-silva">LinkedIn</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="https://twitter.com/ralejandrino">Twitter</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="https://github.com/AlejandrinoSilva/">GitHub</Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </StylesNav>

        <StylesJum>
          <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
              <h1 className="tit">Bienvenido</h1>
              <p>Este es mi primer blog creado con ReactJs todavia esta en preparacion</p>
            </Container>
          </Jumbo>
        </StylesJum>

        <Layout>
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Router>
        </Layout>

        <StylesFoo>
          <footer className="footer mt-auto py-3 con-color">
            <div className="container">
              <span className="text-muted">Pagina con licencia CC  -- Iconos diseñados por <a href="https://www.flaticon.es/autores/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></span>
            </div>
          </footer>
        </StylesFoo>
      </Fragment>

    );
  }

}

export default App;