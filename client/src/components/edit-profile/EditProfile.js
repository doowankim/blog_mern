import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from '../../validation/is-empty';


class EditProfile extends Component {
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
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentProfile(); //자동완성은 아래에 withRouter 작성
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors}) //nextProps에 errors가 있다면 errors:{} 내용을 뿌려준다
        }
        if(nextProps.profile.profile) { //profile 폴더안에 profile내용이 있으면
            const profile = nextProps.profile.profile;

            // Bring skills array back to CSV
            const skillsCSV = profile.skills.join(','); //join(',') 는  여러개를 써줄 때 ,로 구분해준다


            // If profile field doesnt exist, make empty string
            profile.company = !isEmpty(profile.company) ? profile.company : '';
            profile.website = !isEmpty(profile.website) ? profile.website : '';
            profile.location = !isEmpty(profile.location) ? profile.location : '';
            profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
            profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
            profile.social = !isEmpty(profile.social) ? profile.social : {};
            profile.twitter = !isEmpty(profile.twitter) ? profile.twitter : '';
            profile.facebook = !isEmpty(profile.facebook) ? profile.facebook : '';
            profile.linkedin = !isEmpty(profile.linkedin) ? profile.linkedin : '';
            profile.youtube = !isEmpty(profile.youtube) ? profile.youtube : '';
            profile.instagram = !isEmpty(profile.instagram) ? profile.instagram : '';

            // Set component fields state
            this.setState({
                handle: profile.handle,
                company: profile.company,
                website: profile.website,
                location: profile.location,
                status: profile.status,
                skills: skillsCSV,
                githubusername: profile.githubusername,
                bio: profile.bio,
                twitter: profile.twitter,
                facebook: profile.facebook,
                linkedin: profile.linkedin,
                instagram: profile.instagram,
                youtube: profile.youtube
            });

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

        let socialInputs; //데이터가 들어가는 상수선언

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
                            <h1 className="display-4 text-center">Edit Profile</h1>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.handle}
                                    name="handle"
                                    placeholder="* Profile Handle"
                                    error={errors.handle}
                                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                                />
                                <SelectListGroup
                                    onChange={this.onChange}
                                    value={this.state.status}
                                    name="status"
                                    options={options}
                                    placeholder="Status"
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

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(EditProfile)
);