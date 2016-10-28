import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import css from './textarea.css';

type Props = {
	onHeightChange: Function
};
type State = {
	height: number
}

class TmTextarea extends Component {
	props: Props;
	state: State;

	constructor(props: Props) {
		super(props);
		this.state = {
			height: 0
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				height: 20
			});
		});
	}

	handleHeightChange = () => {
		this.props.onHeightChange();
	}

	render() {
		return (
			<TextareaAutosize className={css.root}
				style={{ height: this.state.height }}
				minRows={1}
				maxRows={10}
				onHeightChange={this.handleHeightChange}
				placeholder='Ввведите ваше сообщение...'/>
		);
	}
}

export default TmTextarea;
