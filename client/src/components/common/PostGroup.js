// import React from 'react';
// import classname from 'classnames';
// import PropTypes from 'prop-types';
//
// const PostGroup = ({
//     name,
//     placehorder,
//     value,
//     error,
//     type,
//     onChange
// }) => {
//     return (
//         <div className="form-group">
//             <input
//                 type={type}
//                 className={classname('form-control form-control-lg', {
//                     'is-invalid': error
//                 })}
//                 placeholder={placehorder}
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//             />
//             {error && <div className="invalid-feedback">{error}</div>}
//         </div>
//     )
// };
//
// PostGroup.propTypes = {
//     name: PropTypes.string.isRequired,
//     placehorder: PropTypes.string,
//     value: PropTypes.string.isRequired,
//     error: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired
// };
//
// PostGroup.defaultProps = {
//     type: 'text'
// };
//
// export default PostGroup;
