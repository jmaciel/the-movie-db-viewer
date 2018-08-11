import * as React from 'react';

export interface ISearchBarProps { 
  elementId?: string;
  elementName?: string;
  placeHolder?: string;
}

class SearchBar extends React.Component<ISearchBarProps> {
  
  public static defaultProps = { 
    elementId: 'search-bar',
    elementName: 'search-bar',
    placeHolder: 'Busca'
  };

  public render() {
    return (
        <input 
            type = "text" 
            id = { this.props.elementId } 
            name = { this.props.elementName }
            placeholder = { this.props.placeHolder } 
        />
    );
  }
}

export default SearchBar;