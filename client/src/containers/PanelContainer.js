/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TmPanelDesktop from '../components/panelDesktop';
import TmPanelPhone from '../components/panelPhone';


type Props = {
	dispatch: Function,
	isPhone: boolean,
	isTablet: boolean,
	isDesktop: boolean,
	heightWindow: number,
	widthWindow: number
}

class TmPanelContainer extends Component {
	props: Props;

	constructor(props: Props) {
		super(props);
	}

	renderTemplate = () => {
		const { isPhone } = this.props;

		if (isPhone) {
			return (
				<TmPanelPhone {...this.props}/>
			);
		}
		return (
			<TmPanelDesktop {...this.props}/>
		);
	}

	render() {
		return this.renderTemplate();
	}
}


export default connect()(TmPanelContainer);
