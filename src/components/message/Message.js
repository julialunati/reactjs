import PropTypes from 'prop-types';
import './Message.style.css';

export const Message = ({ author, text }) => {
    // деструктуризация объекта js (props) тоже самое что ({ name })
    // console.log(props);

    return (
        <div className='message'>
            <span> {author}: </span>
            <span> {text} </span>
        </div>
    );
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}

// import React from 'react';

// export class Message extends React.Component{
//     render(){
//         const {name, age, doSmth} = this.props;
//         return (
//             <h3 onClick={doSmth}>
//                  I'm a message: {name}, {age} 
//             </h3>
//         );
//     }
// }