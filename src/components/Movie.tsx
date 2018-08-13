import * as React from 'react';

export interface IMovieProps { 
  title: string;
}

class Movie extends React.Component<IMovieProps> {

  public render() {
    return (
        <div>
          <h1>{ this.props.title }</h1>
        </div>
    );
  }
}

export default Movie;