import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Detail extends Component {
    render() {
        return (
            <div>
                <Link to="/posts" className="btn btn-dark">
                    Go back
                </Link>
                <p>Detail</p>
            </div>
        );
    }
}

export default Detail;