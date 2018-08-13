import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';
import Nav from './Nav';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav pageTitle={'Movies'} />
          </header>
          <Route path='/' exact={true} component={MovieList} />
          <Route path='/movie/:id' exact={true} component={MovieDetails} />
        </div>
      </Router>
    );
  }
}

export default App;