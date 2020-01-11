import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => ( //...rest: 나머지 모든 정보들(속성, 상태값 등등)
    <Route
        {...rest}
        //rendring 해준다 = 화면에 view를 그려준다
        render={props =>
            auth.isAuthenticated === true ? (
                <Component {...props} /> //dashboard에 있는 props
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ //state를 파라메터에 던지고 auth를 받는다
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);