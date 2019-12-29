import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputGroup from "../common/InputGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
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
    }

    onChange(e) {

    }

    onSubmit(e) {

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
                </div>
            )
        }
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create Your Profile</h1>
                            <p className="lead text-center">
                                Let's get some information to make your profile stand out
                            </p>
                            <small className="d-block pb-3">* = required fields</small>

                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    onChange={this.onChange}
                                    value={this.state.handle}
                                    name="handle"
                                    placeholder="* Profile Handle"
                                    error={errors.handle}
                                    info="A unique handle for your profile URL. You full name, company name, nickname"
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
                                <div>
                                    <button
                                        onClick={() => {
                                            this.setState(prevState => ({
                                                //displaySocialInputs 초기값은 false에서 클릭하면 true로 바뀐다
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

CreateProfile.propTypes = {};

export default CreateProfile;