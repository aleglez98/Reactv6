import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Pet from './Pet';
import Details from './Details';
import SearchParams from './SearchParams';

const App = () => (
  <div>
    <Router>
      <header>
        <Link to="/">
          <h1 id="my-band">Adopt Me!</h1>
        </Link>
      </header>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
          <SearchParams></SearchParams>
        </Route>
      </Switch>
    </Router>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));
