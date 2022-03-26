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
    };

    handleClick = () => this.setState({count: this.state.count  + 1});

    render() {
        return (
            <div><h4>{this.state.count}</h4>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}
