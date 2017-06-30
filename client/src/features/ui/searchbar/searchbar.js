/** @flow */
import React, { Component } from 'react';
import cn from 'classnames';
import SearchIcon from 'material-ui/svg-icons/action/search';

import * as s from './searchbar.css';

type Props = {
  filterItems: Function
}

const PLACEHOLDER = 'Поиск';

class Searchbar extends Component {
  props: Props;
  rootNode: HTMLElement;

  handleChange = event => {
    this.props.filterItems(event.target.value);
  }

  handleFocus = () => {
    this.rootNode.style.backgroundColor = 'rgba(255, 255, 255, 0.20)';
  }

  handleBlur = () => {
    this.rootNode.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
  }

  render() {
    return (
      <div className={cn(s.root)} ref={node => this.rootNode = node}>
        <div className={cn(s.iconLayout)}>
          <SearchIcon color={'#fff'}/>
        </div>
        <div className={cn(s.inputLayout)}>
          <input
            type='text'
            placeholder={PLACEHOLDER}
            className={cn(s.input)}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}/>
        </div>
      </div>
    );
  }
}

export default Searchbar;
