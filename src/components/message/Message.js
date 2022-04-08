import { ThemeContext } from '../../utils/ThemeContext';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import './Message.style.css';

export const Message = ({ author, text, theme }) => {
    // деструктуризация объекта js (props) тоже самое что ({ name })
    // console.log(props);

    // const theme = useContext(ThemeContext); // result in console {theme: 'dark', changeTheme: ƒ}
    // const { theme } = useContext(ThemeContext); // result in console dark i.e destructuring assignment)

    console.log(theme);

    return (
        <div className='message'>
            <span style={{ color: theme === 'dark' ? 'red' : 'blue' }}> {author}: </span>
            <span> {text} </span>
        </div>
    );
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}

const withThemeContext = (Component) => (props) => {
    const { theme } = useContext(ThemeContext);

    return <Component {...props} theme={ theme } />
}

export const MessageWithGreenColor = withThemeContext(Message);

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