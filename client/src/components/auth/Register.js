import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classNames from 'classnames';

class Register extends Component {
    
    constructor() {
        super(); //constructor 가장 기본의 되는 상태값을 선언
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this); //텍스트 필드에 계속 침에 따라 값이 변함
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) { // 텍스트 필드에 수정할수 있게 하는 작업, 사용자 입력데이터(e)
        this.setState({ [e.target.name]: e.target.value }); // [e.target.name]: this.state의 5개 항목중 하나라는 뜻
    }

    onSubmit(e) { //change 안에 있는 내용을 넘기는 작업
        e.preventDefault(); //전송용버튼으로 사용할 때

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);

        // axios
        //     .post('users/signup', newUser)
        //     .then(res => console.log(res.data))
        //     .catch(err => this.setState({ errors: err.response.data }));
        this.props.registerUser(newUser);
    }


    render() {
        const { errors } = this.state;
        const { user } = this.props.auth;
        return (
            <div className="register">
                {user ? user.name : null}
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
                                        type="text"
                                        className={classNames("form-control form-control-lg", {
                                            'is-invalid': errors.name
                                        })}
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )}
                                </div>
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
                                    <small className="form-text text-muted">
                                        This site uses Gravatar so if you want a profile image, uses
                                        a Gravatar email                                    
                                    </small>
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
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        className={classNames("form-control form-control-lg", {
                                            'is-invalid': errors.password2
                                        })}
                                        placeholder="Confirm password"
                                        name="password2"
                                        value={this.state.password2}
                                        onChange={this.onChange}
                                    />
                                    {errors.password2 && (
                                        <div className="invalid-feedback">{errors.password2}</div>
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, { registerUser })(Register);