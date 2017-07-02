/** @flow */
import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import { Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cn from 'classnames';

import * as userActions from '@/flux/actions/user';
import DialogPanelContainer from '../containers/dialogPanel';
import DialogDetailContainer from '../containers/dialogDetail';
import * as s from './messenger.css';
import { MESSENGER_ROUTE } from '@/shared/constants';


type Props = {
  fetchDialogs: Function,
  match: {
    url: string
  },
  location: {
    pathname: string
  }
};

class MessengerView extends Component {
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
    const sharedProps = {
      match: this.props.match,
      location: this.props.location
    };

    return (
      <div className={cn(s.root)}>
        <div className={cn(s.panelLayout)}>
          <DialogPanelContainer {...sharedProps}/>
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
                <DialogDetailContainer {...routeProps} />
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

  return bindActionCreators({
    fetchDialogs
  }, dispatch);
}

export default compose(
  pure,
  connect(null, mapDispatchToProps),
)(MessengerView);
