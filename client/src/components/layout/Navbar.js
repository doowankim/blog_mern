import React, { Component } from 'react';

class NavBar extends Component { //로그인을 하면 메뉴가 바뀜
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <a className="navbar-brand" href="landing.html">
                        Dev Connector
                    </a>
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
                                <a className="nav-link" href="profiles.html">
                                    Developers
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="register.html">
                                    Sign Up
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">
                                    Sign In
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;