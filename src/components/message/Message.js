import './Message.style.css';

export const Message = ({name, age, italic}) => {
    // деструктуризация объекта js (props) тоже самое что ({ name })
    // console.log(props);
    return(<h3 className={'message' + (italic ? ' header' : '')}> I'm a message: {name}, {age}  </h3>);
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