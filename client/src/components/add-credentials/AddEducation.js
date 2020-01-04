import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from 'react-redux';

class AddEducation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            school: '',
            degree: '',
            fieldofstudy: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const eduData = {
            school: this.state.school,
            degree: this.state.degree,
            fieldofstudy: this.state.fieldofstudy,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description,
            disabled: this.state.disabled
        };
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onCheck(e) {
        this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current
        });
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="add-education">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Education</h1>
                            <p className="lead text-center">
                                Add any school, bootcamp, etc that you have attended
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.school}
                                    name="school"
                                    placeholder="* School"
                                    error={errors.school}
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.degree}
                                    name="degree"
                                    placeholder="* Degree"
                                    error={errors.degree}
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.fieldofstudy}
                                    name="fieldofstudy"
                                    placeholder="* Fieldofstudy"
                                    error={errors.fieldofstudy}
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
                                        Current School
                                    </label>
                                </div>
                                <TextAreaFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.description}
                                    name="description"
                                    placehorder="Program description"
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

AddEducation.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(AddEducation));