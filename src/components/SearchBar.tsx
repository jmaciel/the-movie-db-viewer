import * as React from 'react';

export interface ISearchBarProps { 
  elementId?: string;
  elementName?: string;
  customHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customHandleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
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
            type="text" 
            id={this.props.elementId} 
            name={this.props.elementName}
            placeholder={this.props.placeHolder} 
            onChange={this.props.customHandleChange}
            onKeyDown={this.props.customHandleKeyDown}
        />
    );
  }
}

export default SearchBar;