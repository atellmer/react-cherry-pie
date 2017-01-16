/** @flow */
// Core
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import SearchIcon from 'material-ui/svg-icons/action/search';

// Styles
import * as css from './searchbar.css';


class TmSearchbar extends Component {
  rootNode: HTMLElement;

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
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}/>
        </div>
      </div>
    );
  }
}

export default pureRender(TmSearchbar);
