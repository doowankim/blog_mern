import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component { //로그인을 하면 메뉴가 바뀜
    render() {
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
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;