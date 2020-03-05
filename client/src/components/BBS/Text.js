// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { CreateText } from "../../actions/postActions";
// import PostGroup from "../common/PostGroup";
//
// class Text extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             text: '',
//             name: '',
//             errors: {}
//         };
//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }
//     onChange(e) {
//         this.setState({ [e.target.name]: e.target.value });
//     }
//     onSubmit(e) {
//         e.preventDefault();
//
//         const newPost = {
//             name: this.state.name,
//             title: this.state.title,
//             text: this.state.text
//         };
//         this.props.CreateText(newPost, this.props.history);
//     }
//     render() {
//         const { errors } = this.state;
//
//         return (
//             <div className="register">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-8 m-auto">
//                             <h1 className="display-4 text-center">Sign Up</h1>
//                             <p className="lead text-center">
//                                 Create your DevConnector account
//                             </p>
//                             <form noValidate onSubmit={this.onSubmit}>
//                                 <PostGroup
//                                     placeholder="Name"
//                                     name="name"
//                                     value={this.state.name}
//                                     onChange={this.onChange}
//                                     error={errors.name}
//                                 />
//                                 <PostGroup
//                                     placeholder="Title"
//                                     name="title"
//                                     type="email"
//                                     value={this.state.title}
//                                     onChange={this.onChange}
//                                     error={errors.title}
//                                 />
//                                 <PostGroup
//                                     placeholder="Text"
//                                     name="text"
//                                     type="text"
//                                     value={this.state.text}
//                                     onChange={this.onChange}
//                                     error={errors.text}
//                                 />
//                                 <input type="submit" className="btn btn-info btn-block mt-4" />
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// Text.propTypes = {
//     CreateText: PropTypes.func.isRequired,
//     errors: PropTypes.object.isRequired
// };
//
// const mapStateToProps = ({
//     post: state.post,
//     errors: state.errors
// });
//
// export default connect(mapStateToProps, { CreateText })(withRouter(Text));