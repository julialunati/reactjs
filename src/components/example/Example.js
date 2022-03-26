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

export class Child extends React.Component {

    constructor(props) {
        super(props);
        //равносильно записи выше 
        console.log('child\'s constructor');
        this.state = {
            count: 0,
            name: 'Jane',
            showChild: false,
        };
    }

    componentDidMount() {
        //компонент смонтирован
        console.log('child is mounted');
    }

    componentWillUnmount() {
        //не получится увидеть 
        console.log('child is unmounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('child is updated', prevProps, prevState);
    }

    render() {
        console.log('child is rendered');
        return (
            <div>
                <h4>Child component</h4>
            </div>
        );
    }

}

export class Counter extends React.Component {
    // state = {
    //     count: 0,
    //     name: 'Jane'
    // };

    constructor(props) {
        super(props);
        //равносильно записи выше 
        console.log('constructor');
        this.state = {
            count: 0,
            name: 'Jane'
        };
    }

    componentDidMount() {
        //компонент смонтирован
        console.log('mounted');
    }

    componentWillUnmount() {
        //не получится увидеть 
        console.log('unmounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('updated', prevProps, prevState);
    }

    increase = () => {
        // если при подсчете нового значения ипспользуется используется текущий state
        //то для корректного вычисления важно использовать oldState
        this.setState((oldState) => ({ count: oldState.count + 1 }), () => {
            console.log('2nd arg', this.state.count);
        });
    }

    decrease = () => {
        this.setState((oldState) => ({ count: oldState.count - 1 }), () => {
            console.log('2nd arg', this.state.count);
        });
    }
    toggleChild = () =>{
        this.setState(prevState =>({
            showChild: !prevState.showChild
        }));
    }
    render() {
        console.log('render');
        return (
            <div><h4>{this.state.count}</h4>
                <button onClick={this.toggleChild}>Click</button>
                {this.state.showChild && <Child />}
            </div>
        );
    }
}
