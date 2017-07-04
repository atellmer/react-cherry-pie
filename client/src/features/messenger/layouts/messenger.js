/** @flow */
import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { CSSTransitionGroup } from 'react-transition-group';

import * as dialogsActions from '../actions/dialogs';
import DialogPanelContainer from '../containers/dialogPanel';
import DialogDetailContainer from '../containers/dialogDetail';
import {
  Root,
  DialogPanelLayout,
  TransitionLayout
} from './styled';
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

class MessengerView extends Component<void, Props, *> {

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
      <Root>
        <DialogPanelLayout>
          <DialogPanelContainer {...sharedProps}/>
        </DialogPanelLayout>
        <Route render={({ location }) => (
          <CSSTransitionGroup
            component={TransitionLayout}
            transitionName='fade'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            isActive={this.getActiveTrigger()}>
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
      </Root>
    );
  }

  render() {
    return this.renderTemplate();
  }
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  const { fetchDialogs } = dialogsActions;

  return bindActionCreators({
    fetchDialogs
  }, dispatch);
}

export default compose(
  pure,
  connect(null, mapDispatchToProps),
)(MessengerView);
