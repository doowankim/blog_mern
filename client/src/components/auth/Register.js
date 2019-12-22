import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import styled from "styled-components";
import TextFieldGroup from '../common/TextFieldGroup';

const Input = styled.input`
    height: 50px;
`;

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

        this.props.registerUser(newUser, this.props.history); //registerUser에 newUser(사용자입력값)을 넣어주고 이상이 없으면 history(login)로 넘어간다
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard'); //login이 되어 있으면(token이 있으면) 넘어가라
        }
    }

    componentWillReceiveProps(nextProps) { //props를 받아오기전에 실행되는 함수
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors});
        }
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
                                <TextFieldGroup
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TextFieldGroup
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                    info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                                />
                                <TextFieldGroup
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    error={errors.password}
                                />
                                <TextFieldGroup
                                    placeholder="Confirm Password"
                                    name="password2"
                                    type="password"
                                    value={this.state.password2}
                                    onChange={this.onChange}
                                    error={errors.password2}
                                />
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
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(mapStateToProps, { registerUser })(withRouter(Register));