/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TmCanvasDesktop from '../components/canvasDesktop';
import TmCanvasPhone from '../components/canvasPhone';
import * as layoutActions from '../actions/LayoutActions';


type Props = {
	dispatch: Function,
	isPhone: boolean,
	isTablet: boolean,
	isDesktop: boolean,
	heightWindow: number,
	widthWindow: number,
	messagePanelHeight: number,
	changeMessagePanelHeight: Function
}

type State = {
	layout: {
		messagePanel: {
			height: number
		}
	}
}

class TmCanvasContainer extends Component {
	props: Props;

	renderTemplate = () => {
		const { isPhone } = this.props;

		if (isPhone) {
			return (
				<TmCanvasPhone {...this.props}/>
			);
		}
		return (
			<TmCanvasDesktop {...this.props}/>
		);
	}

	render() {
		return this.renderTemplate();
	}
}

function mapStateToProps(state: State): any {
	const { layout } = state;

	return {
		messagePanelHeight: layout.messagePanel.height
	};
}

function mapDispatchToProps(dispatch: Function): any {
	const { changeMessagePanelHeight } = layoutActions;

	return {
		changeMessagePanelHeight: bindActionCreators(changeMessagePanelHeight, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TmCanvasContainer);
