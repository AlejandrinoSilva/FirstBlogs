import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { FooterBar } from './components/FooterBar';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Fragment>
          <NavigationBar />
          <Jumbotron />
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
          <FooterBar />
        </Fragment>
      </HashRouter>
    )
  }
}

export default App;