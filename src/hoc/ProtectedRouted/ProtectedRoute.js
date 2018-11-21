import React from 'react';
import { connect, } from 'react-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!rest.token) return (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location, },
        }} />
      );
      return <Component {...rest} />;
    }}
  />
);

const mapStateToProps = (state, ownProps) => {
  return { token: state.auth.token, };
};

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false, }
)(ProtectedRoute);

// Sample mapDispatchToProps
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onAuthCreate: auth => dispatch(actions.authFetch(auth)),
//     onAuthInit: () => dispatch(actions.authInit())
//   };
// };

// read the following to redirect after signin
// https://tylermcginnis.com/react-router-protected-routes-authentication/
// this.props.location.state.from
// IMPORTANT https://stackoverflow.com/questions/43895805/react-router-4-does-not-update-view-on-link-but-does-on-refresh
// Parent of ProtectedRoute must also have withRouter

// export default compose(
//   withRouter,
//   connect(mapStateToProps)
// )(App);

// <ProtectedRoute
//  path="/feature"
//  token={token}
//  component={Feature} />
