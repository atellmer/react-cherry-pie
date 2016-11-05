import React, { Component } from 'react';
import detector from 'device-detect.js/lib/device';

import TmPanelDesktop from '../components/panelDesktop';
import TmPanelPhone from '../components/panelPhone';


class TmPanelContainer extends Component {

	renderTemplate = () => {
		if (detector.mobile()) {
			return (
				<TmPanelPhone/>
			);
		}
		return (
			<TmPanelDesktop/>
		);
	}

	render() {
		return this.renderTemplate();
	}
}


export default TmPanelContainer;
