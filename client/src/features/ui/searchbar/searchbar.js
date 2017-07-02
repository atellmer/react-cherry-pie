/** @flow */
import React, { Component } from 'react';
import SearchIcon from 'material-ui/svg-icons/action/search';

import {
  Root,
  IconLayout,
  InputLayout,
  Input
} from './styled';


type Props = {
  filterItems: Function
}

const PLACEHOLDER = 'Поиск';

class Searchbar extends Component {
  props: Props;

  state = {
    focus: false
  };

  handleChange = event => {
    this.props.filterItems(event.target.value);
  }

  handleFocus = () => {
    this.setState({
      focus: true
    });
  }

  handleBlur = () => {
    this.setState({
      focus: false
    });
  }

  render() {
    return (
      <Root focus={this.state.focus}>
        <IconLayout>
          <SearchIcon color={'#fff'}/>
        </IconLayout>
        <InputLayout>
          <Input
            type='text'
            placeholder={PLACEHOLDER}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}/>
        </InputLayout>
      </Root>
    );
  }
}

export default Searchbar;
