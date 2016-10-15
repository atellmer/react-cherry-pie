import React, { Component } from 'react';
import MoreVertIcon from 'material-ui/svg-icons/action/search';

import css from './search-bar.css';

class TmSearchbar extends Component {
	render() {
		return (
			<div className={css.root}>
				<div className='l-icon'>
					<MoreVertIcon color={'#fff'}/>
				</div>
				<div className='l-input'>
					<input type='text' className='input' placeholder='Поиск'/>
				</div>
			</div>
		);
	}
}

export default TmSearchbar;
