import React from 'react';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import App from './App';
import Blog from './Blog';
import Work from './Work';
import Home from './Home';
import About from './About';
import Item from './item';
import NoMatch from './component/NoMatch';

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='blog' component={Blog} />
        <Route path='work' component={Work} />
        <Route path='about' component={About} />
        <Route path='item/:title' component={Item} />
        <Route path='*' component={NoMatch} />
        </Route>

      </Router>


    )
  }
}

export default Routers;
