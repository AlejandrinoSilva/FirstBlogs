import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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

        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>Edit <code>src/App.js</code> and save to reload.</p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
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