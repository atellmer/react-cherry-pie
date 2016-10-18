/** @flow */
import React, { Component } from 'react';
import SearchIcon from 'material-ui/svg-icons/action/search';

import css from './searchbar.css';

class TmSearchbar extends Component {
	render() {
		return (
			<div className={css.root}>
				<div className={css.iconLayout}>
					<SearchIcon color={'#fff'}/>
				</div>
				<div className={css.inputLayout}>
					<input type='text' className={css.input} placeholder='Поиск'/>
				</div>
			</div>
		);
	}
}

export default TmSearchbar;
