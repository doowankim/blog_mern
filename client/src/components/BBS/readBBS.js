import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Moment from "react-moment";

class ReadBBS extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
            errors: ''
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
            <div className="BBS">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                        </div>
                        <div className="col-md-4 offset-md-4 text-right">
                            <Link to="/dashboard" className="btn btn-light">
                                Write
                            </Link>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <h1 className="display-4 text-center">BBS</h1>
                                <p className="lead text-center">
                                    BBS
                                </p>
                            </div>
                        </div>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {results.map(result =>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{result.name}</td>
                                        <td>{result.text}</td>
                                        <td>
                                            <Moment format="YYYY년 MM월 DD일">
                                                {result.date.substring(0, 10)}
                                            </Moment>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        );
    }
}

ReadBBS.propTypes = {};

export default ReadBBS;