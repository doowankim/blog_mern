import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from "react-moment";

class Experience extends Component {
    onDeleteClick(id) {

    }

    render() {
        const experience = this.props.experience.map(exp => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>{exp.location}</td>
                <td>
                    <Moment format="YYYY/MM/DD">{exp.from}</Moment>
                    {exp.to === null ? (
                        ' Now'
                    ) : (
                        <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                    )}
                </td>
                <td>
                    <button
                        onClick={this.onDeleteClick}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
        return (
            <div>
                <h4 className="mb-4">Experience Credentials</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Year</th>
                        <th />
                    </tr>
                    {experience}
                    </thead>
                </table>
            </div>
        );
    }
}

Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired
};

export default connect(null)(Experience);