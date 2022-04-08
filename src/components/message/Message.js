import { ThemeContext } from '../../utils/ThemeContext';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import './Message.style.css';

export const Message = ({ author, text, color= "red" }) => {
    // деструктуризация объекта js (props) тоже самое что ({ name })
    // console.log(props);

    const theme = useContext(ThemeContext); // result in console {theme: 'dark', changeTheme: ƒ}
    // const { theme } = useContext(ThemeContext); // result in console dark i.e destructuring assignment)

    console.log(theme);

    return (
        <div className='message'>
            <span style={{ color }}> {author}: </span>
            <span> {text} </span>
        </div>
    );
}

// Message.propTypes = {
//     author: PropTypes.string.isRequired,
//     text: PropTypes.string,
// }

const withGreenColor = (Component) => (props) => {
    return<Component {...props} color="green" />
}

export const MessageWithGreenColor = withGreenColor(Message);

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