import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import InputGroup from "../common/InputGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            address: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            address: this.state.address,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        };

        this.props.createProfile(profileData, this.props.history);

    }

    render() {

        const { errors, displaySocialInputs } = this.state;

        let socialInputs;

        if (displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                        onChange={this.onChange}
                        value={this.state.twitter}
                        name="twitter"
                        icon="fab fa-twitter"
                        placehorder="Twitter Profile URL"
                        error={errors.twitter}
                    />
                    <InputGroup
                        onChange={this.onChange}
                        value={this.state.facebook}
                        name="facebook"
                        icon="fab fa-facebook"
                        placehorder="Facebook Profile URL"
                        error={errors.facebook}
                    />
                    <InputGroup
                        onChange={this.onChange}
                        value={this.state.instagram}
                        name="instagram"
                        icon="fab fa-instagram"
                        placehorder="Instagram Profile URL"
                        error={errors.instagram}
                    />
                    <InputGroup
                        onChange={this.onChange}
                        value={this.state.youtube}
                        name="youtube"
                        icon="fab fa-youtube"
                        placehorder="Youtube Profile URL"
                        error={errors.youtube}
                    />
                    <InputGroup
                        onChange={this.onChange}
                        value={this.state.linkedin}
                        name="linkedin"
                        icon="fab fa-linkedin"
                        placehorder="Linkedin Profile URL"
                        error={errors.linkedin}
                    />
                </div>
            )
        }

        const options = [
            { label: '* Select Professional Status', value: 0 },
            { label: 'Developer', value: 'Developer' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Senior Developer', value: 'Senior Developer' },
            { label: 'Manager', value: 'Manager' },
            { label: 'Student or Learning', value: 'Student or Learning' },
            { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other' },
        ];

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create your Profile</h1>
                            <p className="lead text-center">
                                당신의 프로필을 돋보이게 하는 정보를 입력해 주세요
                            </p>
                            <small className="d-block pb-3">* = 필수 요소</small>

                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.handle}
                                    name="handle"
                                    placeholder="* Profile Handle"
                                    error={errors.handle}
                                    info="A unique handle for your profile URL. You full name, company name, nickname"
                                />
                                <SelectListGroup
                                    onChange={this.onChange}
                                    value={this.state.status}
                                    name="status"
                                    options={options}
                                    error={errors.status}
                                    info="Give us an idea of where you are at in your career"
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.company}
                                    name="company"
                                    placeholder="Your Company"
                                    error={errors.company}
                                    info="Could be your own company or one you word for"
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.website}
                                    name="website"
                                    placeholder="Your Website"
                                    error={errors.website}
                                    info="Could be your own website or a company one"
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.address}
                                    name="address"
                                    placeholder="Your Address"
                                    error={errors.address}
                                    info="City or city & state suggested (eg. Boston, MA)"
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.skills}
                                    name="skills"
                                    placeholder="* Skills"
                                    error={errors.skills}
                                    info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                                />
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.githubusername}
                                    name="githubusername"
                                    placeholder="Your Githubusername"
                                    error={errors.githubusername}
                                    info="If you wnat your latest repos and a Github link, include your username"
                                />
                                <TextAreaFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.bio}
                                    name="bio"
                                    placehorder="Short Bio"
                                    error={errors.bio}
                                    info="Tell us a little about yourself"
                                />
                                <div className="mb-3">
                                    <button
                                        onClick={() => {
                                            this.setState(prevState => ({
                                                displaySocialInputs: !prevState.displaySocialInputs
                                            }));
                                        }}
                                        className="btn btn-light"
                                    >
                                        Add Social Network Links
                                    </button>
                                    <span className="text-muted">Optional</span>
                                </div>
                                {socialInputs}
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

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});


export default connect(mapStateToProps, { createProfile })(
    withRouter(CreateProfile)
);
