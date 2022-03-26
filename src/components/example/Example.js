import React from 'react';
// import { useState } from 'react';

// export const Counter = () => {
//     // передача изначального состояния 
//     const [count, setCount] = useState(11);
//     return (
//         <div><h4>{count}</h4>
//             {/* работа с переменной */}
//             <button onClick={() => setCount(count + 1)}>Click</button>
//         </div>
//     );
// }

export class Counter extends React.Component {
    state = {
        count: 0,
        name: 'Jane'
    };

    handleClick = () =>{
        console.log('before', this.state.count);
        this.setState({count: this.state.count  + 1}, ()=> {
            // callback at the end of function handleClick
            console.log('2nd arg', this.state.count);
        });
        console.log('after', this.state.count);
    } 
    render() {
        // console.log(this.state.name);
        return (
            <div><h4>{this.state.count}</h4>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}
