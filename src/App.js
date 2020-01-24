import React, { Fragment, Component } from 'react';
import { Nav, Navbar, Container, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import { Home, About, Contact, QuizBee } from './components/Home';
import { QuizBee } from '.components/QuizBee'
import { Route, Switch, Link } from 'react-router-dom';

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
        font-size: 63px;
    }
`;


class App extends Component {
  render() {
    return (
      <Fragment>
        <StylesNav>
          <Navbar expand="lg fixed-top">
            <Navbar.Brand href="/FirstBlogs">Mi primer blog con React Js</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item><Link className="nav-link" to="/">Home</Link></Nav.Item>
                <Nav.Item><Link className="nav-link" to="/contact">Contact</Link></Nav.Item>
                <Nav.Item><Link className="nav-link" to="/QuizBee">QuizBee</Link></Nav.Item>
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/QuizBee" component={QuizBee} />
          </Switch>
        </Layout>

        <StylesFoo>
          <footer className="footer mt-auto py-3 con-color">
            <div className="container">
              <span className="text-muted">Pagina con licencia CC</span>
              <span><div>Iconos diseñados por <a href="https://www.flaticon.es/autores/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div></span>
              <span><div>Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div></span>
            </div>
          </footer>
        </StylesFoo>
      </Fragment>

    );
  }

}

const Layout = (props) => (
  <Container>
    {props.children}
  </Container>
)

export default App;
