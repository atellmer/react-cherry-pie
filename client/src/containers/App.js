/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import detector from 'device-detect.js/lib/device';

import TmAppbar from '../components/appbar';
import TmPanelDesktop from '../components/panel-desktop';
import TmPanelPhone from '../components/panel-phone';
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
				<TmAppbar/>
			</div>
		);
	}

	getPhoneTemplate = () => {
		return (
			<Flex className={css.contentPhoneLayout}>
				<Box className={css.panelPhoneLayout}>
					<TmPanelPhone/>
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
					<TmPanelDesktop/>
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
		if (detector.desktop()) {
			return this.renderDesktopTemplate();
		}
		return (
			<div>...</div>
		);
	}

	render() {
		return this.renderTemplate();
	}
}

export default App;
