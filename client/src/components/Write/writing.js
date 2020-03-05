import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";


class writing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            errors: {}
        };
    }
    componentDidMount() {
        axios
            .get('/posts/total')
            .then(res => this.setState({results: res.data.posts}))
            .catch(err => console.log(err));
    }

    render() {

        const { results } = this.state;

        console.log(results);


        // 삭제(Detail from ID - 댓글, 좋아요 등등), 수정, 글쓰기
        return (
            <div className="Write">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/posts" className="btn btn-dark">
                                Go Back
                            </Link>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput3">Name</label>
                        <input className="form-control" type="text" placeholder="Default input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput2">Title</label>
                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                <input
                    type="submit"
                    value="Save"
                    className="btn btn-info btn-block mt-4"
                />
            </div>
        );
    }
}

writing.propTypes = {
    posts: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default writing;