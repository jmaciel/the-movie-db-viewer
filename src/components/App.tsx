import * as React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

import './../styles/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav pageTitle={'Movies'} />
        </header>
        <SearchBar />
      </div>
    );
  }
}

export default App;
