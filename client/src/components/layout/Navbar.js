import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NavBar extends Component { //로그인을 하면 메뉴가 바뀜

    //눌렀다는 동작을 e라고 표현
    onLogoutClick(e) {
        this.props.logoutUser();
    }

    render() {
        const { isAuthenicated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a
                        href=""
                        onClick={this.onLogoutClick.bind(this)}
                        className="nav-link"
                    >
                        <img
                            className="rounded-circle"
                            src={user.avatar}
                            alt={user.name}
                            style={{ width: '25px', marginRight: '5px' }}
                            title="You must have a Gravatar connected to your email to display an image"
                        />{' '}
                        logout
                    </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="register">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="login">
                        Sign In
                    </Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="landing">
                        Dev Connector
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse" //반응형 옵션
                        data-target="#mobile-nav" //반응형 옵션
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="profiles">
                                    Developers
                                </Link>
                            </li>
                            {isAuthenicated ? authLinks : guestLinks}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(NavBar);