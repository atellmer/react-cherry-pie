/** @flow */
import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import { Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cn from 'classnames';

import * as userActions from '@/flux/actions/userActions';
import DialogPanelContainer from '../containers/dialogPanel';
import DialogDetailContainer from '../containers/dialogDetail';
import * as s from './messenger.css';
import { MESSENGER_ROUTE } from '@/shared/constants';


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

class MessengerPage extends Component {
  props: Props;

  componentDidMount() {
    this.props.fetchDialogs();
  }

  getActiveTrigger = () => {
    const { pathname } = this.props.location;
    const regexp = `${MESSENGER_ROUTE}\/.`;
    const activeTrigger = new RegExp(regexp).test(pathname);

    return activeTrigger;
  }

  renderTemplate = () => {
    return (
      <div className={cn(s.root)}>
        <div className={cn(s.panelLayout)}>
          <DialogPanelContainer {...this.props}/>
        </div>
        <Route render={({ location }) => (
          <CSSTransitionGroup
            component='div'
            className={cn(s.canvasLayout, { 'isActive': this.getActiveTrigger() })}
            transitionName='fade'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            <Route
              exact
              location={location}
              key={location.key}
              path={`${this.props.match.url}/:id`}
              render={routeProps => (
                <DialogDetailContainer {...this.props} {...routeProps}/>
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
)(MessengerPage);
