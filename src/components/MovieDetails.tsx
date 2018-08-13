import * as React from 'react';
import MoviesProvider from '../providers/MoviesProvider';

export interface IMovieDetailsProps { 
  match?: any;
}

export interface IMovieDetailsState { 
  title: string;
}

class MovieDetails extends React.Component<IMovieDetailsProps, IMovieDetailsState> {

  public constructor(props: IMovieDetailsProps, state: IMovieDetailsState) {
    super(props, state);
    this.state = {
      title: ''
    };
  }

  public componentDidMount() {
    this.getMovie(this.props.match.params.id);
  }

  public render() {
    return (
        <div className="movie-details">
        <h2>{ this.state.title }</h2>
        </div>
    );
  }

  public getMovie(id: number) {
    const moviesProvider: MoviesProvider = new MoviesProvider();
    moviesProvider.getMovie(id).then((data: any) => {
      this.setState({
        title: data.title
      });
    });
  }
}

export default MovieDetails;