import * as React from 'react';

export interface INavProps { 
  pageTitle: string;
}

class Nav extends React.Component<INavProps> {
  public render() {
    return (
      <nav className="nav-bar">
        <h1 className="page-title">{ this.props.pageTitle }</h1>
      </nav>
    );
  }
}

export default Nav;