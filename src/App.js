import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Layout } from './Layout';
import { NavigationBar } from './NavigationBar';
import { Home } from './Home';
import { FooterBar } from './FooterBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
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
        <FooterBar />
      </Fragment>

    );
  }

}

export default App;