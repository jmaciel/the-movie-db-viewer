import * as React from 'react';

import { debounce } from 'lodash';
import Movie from './Movie';

import MoviesProvider from './../providers/MoviesProvider';
import Nav from './Nav';

import Paginator from './Paginator';
import SearchBar from './SearchBar';

import './../styles/App.css';

const ENTER_KEY = 13;

export interface IAppState { 
  movieList: any[],
  page: number,
  searchQuery: string,
  totalPages: number,
  totalResults: number
}

class App extends React.Component<{}, IAppState> {

  public raiseSearchMoviesWhenUserStoppedTyping = debounce(
    () => {
      this.searchMovies();
    },  
    300
  );

  public constructor({}) {
    super({});
    this.state = {
      movieList: [],
      page: 1,
      searchQuery: 'truman',
      totalPages: 1,
      totalResults: 1
    };
    this.searchMovies();
  }

  public handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchQuery: event.currentTarget.value
    }, this.raiseSearchMoviesWhenUserStoppedTyping);
  }

  public handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === ENTER_KEY) {
      this.setState({
        searchQuery: event.currentTarget.value
      }, this.searchMovies);
    }
  }

  public handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      page: (Number(event.currentTarget.value))
    }, this.searchMovies);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav pageTitle={'Movies'} />
        </header>
        <SearchBar 
          customHandleChange={this.handleSearchChange} 
          customHandleKeyDown={this.handleKeyDown}
        />
        <ul>
          {this.state.movieList.map((m) => {
            return <li key={m.id}><Movie title={m.title} /></li>;
          })}
        </ul>

        <Paginator 
          customHandleOnClick={this.handleClick}
          currentPage={this.state.page} 
          totalPages={this.state.totalPages}
        />
      </div>
    );
  }

  public searchMovies() {
    if(this.state.searchQuery === '') {
      this.setState({
        movieList: [],
        page: 1,
        totalPages: 1,
        totalResults: 1
      });
      return;
    };
    const moviesProvider: MoviesProvider = new MoviesProvider();
    moviesProvider.searchMovies(this.state.searchQuery, this.state.page).then((data: any) => {
      this.setState({
        movieList: data.results,
        page: data.page,
        totalPages: data.total_pages,
        totalResults: data.total_results
      });
    });
  }
}

export default App;
