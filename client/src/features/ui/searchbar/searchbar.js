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

type State = {
  focus: boolean
}

const PLACEHOLDER = 'Поиск';

class Searchbar extends Component<void, Props, State> {

  state = {
    focus: false
  };

  handleChange = (ev: Event & { target: {value: string} }) => {
    this.props.filterItems(ev.target.value);
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
