/** @flow */
// Core
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Flex, Box } from 'reflexbox';

// Actions
import * as environmentActions from '../actions/EnvironmentActions';
import * as userActions from '../actions/UserActions';

// Components
import TmAppbarContainer from '../containers/AppbarContainer';
import TmPanelContainer from '../containers/PanelContainer';

// Styles
import * as css from './App.css';


type Props = {
  detectDevice: Function,
  detectSizeWindow: Function,
  fetchUser: Function,
  fetchDialogs: Function,
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  heightWindow: number,
  widthWindow: number,
  children: any
};

class App extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {
    this.props.detectDevice();
    this.props.detectSizeWindow();
    window.addEventListener('resize', () => this.props.detectSizeWindow());
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchDialogs();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.props.detectSizeWindow());
  }

  renderTemplate = () => {
    let children = null;

    if (this.props.children) {
      children = React.cloneElement(this.props.children, this.props);
    }

    return (
      <div className={css.root}>
        <div className={css.appbarLayout}>
          <TmAppbarContainer {...this.props}/>
        </div>
        <Flex className={css.contentLayout}>
          <Box className={css.panelLayout}>
            <TmPanelContainer {...this.props}/>
          </Box>
          <Box className={css.canvasLayout}>
            {children}
          </Box>
        </Flex>
      </div>
    );
  }

  render() {
    return this.renderTemplate();
  }
}

function mapStateToProps(state: any) {
  const { environment } = state;

  return {
    isPhone: environment.isPhone,
    isTablet: environment.isTablet,
    isDesktop: environment.isDesktop,
    widthWindow: environment.width,
    heightWindow: environment.height
  };
}

function mapDispatchToProps(dispatch: Function) {
  const { detectDevice, detectSizeWindow } = environmentActions;
  const { fetchUser, fetchDialogs } = userActions;

  return {
    detectDevice: bindActionCreators(detectDevice, dispatch),
    detectSizeWindow: bindActionCreators(detectSizeWindow, dispatch),
    fetchUser: bindActionCreators(fetchUser, dispatch),
    fetchDialogs: bindActionCreators(fetchDialogs, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(pureRender(App));
