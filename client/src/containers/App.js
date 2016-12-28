/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex, Box } from 'reflexbox';

import { detectDevice, detectSizeWindow } from '../actions/EnvironmentActions';
import TmAppbarContainer from '../containers/AppbarContainer';
import TmPanelContainer from '../containers/PanelContainer';
import TmCanvasContainer from './CanvasContainer';
import css from './App.css';


type Props = {
  dispatch: Function,
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  heightWindow: number,
  widthWindow: number
};

type State = {
  environment: {
    isPhone: boolean,
    isTablet: boolean,
    isDesktop: boolean,
    width: number,
    height: number
  }
}

class App extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(detectDevice());
    dispatch(detectSizeWindow());
    window.addEventListener('resize', () => dispatch(detectSizeWindow()));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    window.removeEventListener('resize', () => dispatch(detectSizeWindow()));
  }

  getAppbarTemplate = () => {
    return (
      <div className={css.appbarLayout}>
        <TmAppbarContainer {...this.props}/>
      </div>
    );
  }

  getPhoneTemplate = () => {
    return (
      <Flex className={css.contentPhoneLayout}>
        <Box className={css.panelPhoneLayout}>
          <TmPanelContainer {...this.props}/>
        </Box>
        <Box className={css.canvasPhoneLayout}>
          <TmCanvasContainer {...this.props}/>
        </Box>
      </Flex>
    );
  }

  getTabletTemplate = () => {
    return (
      <Flex className={css.contentDesktopLayout}>
        <Box className={css.panelDesktopLayout}>
          <TmPanelContainer {...this.props}/>
        </Box>
        <Box className={css.canvasDesktopLayout}>
          <TmCanvasContainer {...this.props}/>
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
    const { isPhone, isTablet } = this.props;

    if (isPhone) {
      return this.renderPhoneTemplate();
    }
    if (isTablet) {
      return this.renderTabletTemplate();
    }
    return this.renderDesktopTemplate();
  }

  render() {
    return this.renderTemplate();
  }
}

function mapStateToProps(state: State): any {
  const { environment } = state;

  return {
    isPhone: environment.isPhone,
    isTablet: environment.isTablet,
    isDesktop: environment.isDesktop,
    widthWindow: environment.width,
    heightWindow: environment.height
  };
}

export default connect(mapStateToProps)(App);
