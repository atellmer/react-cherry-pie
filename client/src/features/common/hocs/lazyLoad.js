/** @flow */
import React, { Component } from 'react';


type State = {
  component: ReactClass<*> | null
};

const moduleDefaultExport = module => module.default || module;
const lazyLoad = (getComponent: Function) => {
  return class WrappedComponent extends Component<void, *, State> {
    static displayName = 'LazyLoadComponent';
    static component = null;
    state = {
      component: WrappedComponent.component
    };

    componentWillMount() {
      if (!this.state.component) {
        getComponent()
        .then(moduleDefaultExport)
        .then(component => {
          WrappedComponent.component = component;
          this.setState({ component });
        });
      }
    }

    render() {
      const { component: LazyComponent } = this.state;

      if (LazyComponent) {
        return <LazyComponent {...this.props} />;
      }

      return null;
    }
  };
};

export default lazyLoad;
