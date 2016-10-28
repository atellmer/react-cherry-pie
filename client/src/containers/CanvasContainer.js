import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TmCanvas from '../components/canvas';
import * as layoutActions from '../actions/LayoutActions';

type Props = {
	messagePanelHeight: number,
	layoutActions: any
}

class TmCanvasContainer extends Component {
	props: Props;

	render() {
		const { messagePanelHeight } = this.props;
		const { reciveMessagePanelHeight } = this.props.layoutActions;

		return (
			<TmCanvas messagePanelHeight={messagePanelHeight}
				reciveMessagePanelHeight={reciveMessagePanelHeight}/>
		);
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
