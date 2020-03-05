import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
                        <div className="col-sm-4">
                            <Link to="/writing" className="btn btn-dark">
                                Write
                            </Link>
                        </div>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">이   름</th>
                                    <th scope="col">제   목</th>
                                    <th scope="col">작성 날짜</th>
                                </tr>
                                </thead>
                                <tbody>
                                {results.map(result =>
                                    <tr>
                                        <th scope="row">#</th>
                                                <td>
                                                    <a href="/detail">
                                                        {result.name}
                                                    </a>
                                                </td>
                                            <td>
                                                <a href="/text">
                                                    {result.title}
                                                </a>
                                            </td>
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