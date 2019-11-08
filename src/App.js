import React, { Fragment, Component } from 'react';
import { Nav, Navbar, Container, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import './carousel.css';

const StylesNav = styled.div`
    .navbar{
        background-color: black;
        position: relative;
    }

    .navbar-brand {
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
const StylesHome = styled.div`
    .div-all{
        position: relative;
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
        font-size: 69px;
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
                <Nav.Item><Nav.Link href="/"><img src="./book.png" alt="Book" height="64" width="64" /></Nav.Link></Nav.Item>
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
              <p>Este es mi primer blog creado con ReactJs todavia esta en preparacion</p>
            </Container>
          </Jumbo>
        </StylesJum>

        <Container>
          <StylesHome>
            <h2>What is Lorem Ipsum? / Home</h2>
            <div className="row mb-2">
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">World</strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="/" className="stretched-link">Continue reading</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Design</strong>
                    <h3 className="mb-0">Post title</h3>
                    <div className="mb-1 text-muted">Nov 11</div>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="/" className="stretched-link">Continue reading</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </StylesHome>
        </Container>

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