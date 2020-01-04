import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from 'react-redux';
import { addExperiece} from "../../actions/profileActions";

class AddExperiece extends Component {

    constructor(props) {
        super(props);
        this.state = {
            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
        };
        //binding
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const expData = {
            company: this.state.company,
            title: this.state.title,
            location: this.state.location,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description,
            disabled: this.state.disabled
        };
        this.props.addExperiece(expData, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onCheck(e) {
        // check를 해주면 현재 있는 상태 값에 반대로 된다
        this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors }); //nextProps = payload
        }
    }


    render() {
        const { errors } = this.state;
        return (
            <div className="add-experience">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Experience</h1>
                            <p className="lead text-center">
                                Add any job or position that you have had in the past or current
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.company}
                                    name="company"
                                    placeholder="* Company"
                                    error={errors.company}
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.title}
                                    name="title"
                                    placeholder="* Job Title"
                                    error={errors.title}
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.location}
                                    name="location"
                                    placeholder="* Location"
                                    error={errors.location}
                                />
                                <h6>From Date</h6>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.from}
                                    name="from"
                                    type="date"
                                    error={errors.from}
                                />
                                <h6>To Date</h6>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.from}
                                    name="to"
                                    type="date"
                                    error={errors.from}
                                    disabled={this.state.disabled ? 'disabled' : ''}
                                />
                                <div className="form-check mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="current"
                                        value={this.state.current}
                                        checked={this.state.current}
                                        onChange={this.onCheck}
                                        id="current"
                                    />
                                    <label htmlFor="current" className="form-check-label">
                                        Current Job
                                    </label>
                                </div>
                                <TextAreaFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.description}
                                    name="description"
                                    placehorder="Job description"
                                    error={errors.description}
                                    info="Tell us about the position"
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-info btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddExperiece.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addExperiece: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

// { addExperience }를 적어야 네트워크를 태울 수 있는 것
export default connect(mapStateToProps, { addExperiece })(withRouter(AddExperiece));