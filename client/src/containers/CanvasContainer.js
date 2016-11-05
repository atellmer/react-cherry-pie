import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import detector from 'device-detect.js/lib/device';

import TmCanvasDesktop from '../components/canvasDesktop';
import TmCanvasPhone from '../components/canvasPhone';
import * as layoutActions from '../actions/LayoutActions';

type Props = {
	messagePanelHeight: number,
	layoutActions: any
}

class TmCanvasContainer extends Component {
	props: Props;

	renderTemplate = () => {
		const { messagePanelHeight } = this.props;
		const { reciveMessagePanelHeight } = this.props.layoutActions;

		if (detector.mobile()) {
			return (
				<TmCanvasPhone messagePanelHeight={messagePanelHeight}
					reciveMessagePanelHeight={reciveMessagePanelHeight}/>
			);
		}
		return (
			<TmCanvasDesktop messagePanelHeight={messagePanelHeight}
				reciveMessagePanelHeight={reciveMessagePanelHeight}/>
		);
	}

	render() {
		return this.renderTemplate();
	}
}

function mapStateToProps({ layout }) {
	return {
		messagePanelHeight: layout.messagePanel.height
	};
}

function mapDispatchToProps(dispatch) {
	return {
		layoutActions: bindActionCreators(layoutActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TmCanvasContainer);
