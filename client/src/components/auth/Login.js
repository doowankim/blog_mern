import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';

class Login extends Component {
    
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const loginUser = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(loginUser);

        axios
            .post('users/login', loginUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data }));
    }




    render() {
        const { errors } = this.state;
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your DevConnector account
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="email"
                                        className={classNames("form-control form-control-lg", {
                                            'is-invalid': errors.email
                                        })}
                                        placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        className={classNames("form-control form-control-lg", {
                                            'is-invalid': errors.password
                                        })}
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" /> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;