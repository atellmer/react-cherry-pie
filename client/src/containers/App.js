/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import detector from 'device-detect.js/lib/device';

import TmAppbarContainer from '../containers/AppbarContainer';
import TmPanelContainer from '../containers/PanelContainer';
import TmCanvasContainer from './CanvasContainer';
import css from './App.css';

type Props = {};

class App extends Component {
	props: Props;

	constructor(props: Props) {
		super(props);
	}

	getAppbarTemplate = () => {
		return (
			<div className={css.appbarLayout}>
				<TmAppbarContainer/>
			</div>
		);
	}

	getPhoneTemplate = () => {
		return (
			<Flex className={css.contentPhoneLayout}>
				<Box className={css.panelPhoneLayout}>
					<TmPanelContainer/>
				</Box>
				<Box className={css.canvasPhoneLayout}>
					<TmCanvasContainer/>
				</Box>
			</Flex>
		);
	}

	getTabletTemplate = () => {
		return (
			<Flex className={css.contentDesktopLayout}>
				<Box className={css.panelDesktopLayout}>
					<TmPanelContainer/>
				</Box>
				<Box className={css.canvasDesktopLayout}>
					<TmCanvasContainer/>
				</Box>
			</Flex>
		);
	}

	renderPhoneTemplate = () => {
		return (
			<div className={css.root}>
				{this.getAppbarTemplate()}
				{this.getPhoneTemplate()}
			</div>
		);
	}

	renderTabletTemplate = () => {
		return (
			<div className={css.root}>
				{this.getAppbarTemplate()}
				{this.getTabletTemplate()}
			</div>
		);
	}

	renderDesktopTemplate = () => {
		return (
			<div className={css.root}>
				{this.getAppbarTemplate()}
				{this.getPhoneTemplate()}
				{this.getTabletTemplate()}
			</div>
		);
	}

	renderTemplate = () => {
		if (detector.mobile()) {
			return this.renderPhoneTemplate();
		}
		if (detector.tablet()) {
			return this.renderTabletTemplate();
		}
		return this.renderDesktopTemplate();
	}

	render() {
		return this.renderTemplate();
	}
}

export default App;
