import React from 'react';
// import { useState } from 'react';

// export const Counter = () => {
//     // передача изначального состояния 
//     const [count, setCount] = useState(11);
//     return (
//         <div><h4>{count}</h4>
//             {/* изменение переменной при функциональном подходе */}
//             <button onClick={() => setCount((prevCount) => prevCount + 1)}>Click</button>
//         </div>
//     );
// }

export class Counter extends React.Component {
    state = {
        count: 0,
        name: 'Jane'
    };

    increase = () =>{
        // если при подсчете нового значения ипспользуется используется текущий state
        //то для корректного вычисления важно использовать oldState
        this.setState((oldState) => ({count: oldState.count  + 1}), ()=> {
            console.log('2nd arg', this.state.count);
        });
    } 

    decrease = () =>{
        this.setState((oldState) => ({count: oldState.count - 1}), ()=> {
            console.log('2nd arg', this.state.count);
        });
    } 
    render() {
        // console.log(this.state.name);
        return (
            <div><h4>{this.state.count}</h4>
                <button onClick={this.increase}>Click</button>
            </div>
        );
    }
}
