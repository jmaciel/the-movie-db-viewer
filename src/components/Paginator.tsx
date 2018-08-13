import * as React from 'react';

export interface IPaginatorProps { 
  currentPage?: number;
  customHandleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  totalPages?: number;
}

class Paginator extends React.Component<IPaginatorProps> {

  public static defaultProps = { 
    currentPage: 1,
    totalPages: 1
  };

  public render() {
    return (
        <ul className="paginator">
          {Array.from(new Array(this.props.totalPages),(val,index)=>(index+1)).map((p) => {
            return <li key={p}><button value={p} onClick={this.props.customHandleOnClick}>{p}</button></li>;
          })}
        </ul>
    );
  }
}

export default Paginator;