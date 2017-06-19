/** @flow */
import React, { Component } from 'react';
import SearchIcon from 'material-ui/svg-icons/action/search';

import * as css from './searchbar.css';

type Props = {
  filterItems: Function
}

class TmSearchbar extends Component {
  props: Props;
  rootNode: HTMLElement;

  handleChange = (event) => {
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
      <div className={css.root} ref={node => this.rootNode = node}>
        <div className={css.iconLayout}>
          <SearchIcon color={'#fff'}/>
        </div>
        <div className={css.inputLayout}>
          <input
            type='text'
            placeholder='Поиск'
            className={css.input}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}/>
        </div>
      </div>
    );
  }
}

export default TmSearchbar;
