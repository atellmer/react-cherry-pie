/** @flow */
import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import { Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';

import * as userActions from '@/flux/actions/userActions';
import TmPanelContainer from '../containers/panelContainer';
import TmCanvasContainer from '../containers/canvasContainer';
import * as css from './messenger.css';


type Props = {
  fetchDialogs: Function,
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  heightWindow: number,
  widthWindow: number,
  match: {
    url: string
  },
  location: {
    pathname: string
  }
};

class TmMessenger extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDialogs();
  }

  renderTemplate = () => {
    const activeLayoutTrigger = /messenger\/./.test(this.props.location.pathname);

    return (
      <div className={css.root}>
        <div className={css.panelLayout}>
          <TmPanelContainer {...this.props}/>
        </div>
        <Route render={({ location }) => (
          <CSSTransitionGroup
            component='div'
            className={cx(css.canvasLayout, { 'isActiveLayout': activeLayoutTrigger })}
            transitionName='fade'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            <Route
              exact
              location={location}
              key={location.key}
              path={`${this.props.match.url}/:id`}
              render={(props) => (
                <TmCanvasContainer {...this.props} {...props}/>
              )}/>
          </CSSTransitionGroup>
        )}/>
      </div>
    );
  }

  render() {
    return this.renderTemplate();
  }
}

function mapDispatchToProps(dispatch) {
  const { fetchDialogs } = userActions;

  return {
    fetchDialogs: bindActionCreators(fetchDialogs, dispatch)
  };
}

export default compose(
  connect(null, mapDispatchToProps),
  pure
)(TmMessenger);
