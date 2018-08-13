import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IMovieProps { 
  id: number;
  title: string;
}

class Movie extends React.Component<IMovieProps> {

  public render() {
    return (
        <div>
          <Link to={'/movie/' + this.props.id}><h2>{ this.props.title }</h2></Link>
        </div>
    );
  }
}

export default Movie;