import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputGroup from "../common/InputGroup";

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
            <div>
                <h1>asldfkj</h1>
                {socialInputs}
            </div>
        );
    }
}

CreateProfile.propTypes = {};

export default CreateProfile;