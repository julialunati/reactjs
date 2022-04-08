// import React from 'react';
import { useEffect, useState } from 'react';

export const Counter = ({ randomNumber }) => {
    // передача изначального состояния 
    const [count, setCount] = useState(11);

    useEffect(() => {
        console.log('like mounted');
    }, []);

    useEffect(() => {
        console.log('like mounted and updated');
        return () => {
            console.log('unmounted no dependecies');
        };
    });

    useEffect(() => {
        console.log('like mounted + count updated');
    }, [count]);

    useEffect(() => {
        console.log('like mounted + randomNumber updated');
    }, [randomNumber]);

    useEffect(() => {
        console.log('like mounted + count or randomNumber updated');
        return () => {
            console.log('unmounted [count, randomNumber]');
        };
    }, [count, randomNumber]);

    useEffect(() => {
        return () => {
            console.log('unmounted');
        };
    }, []);


    return (
        <div>
            <h4>{count}</h4>
            {/* изменение переменной при функциональном подходе */}
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Click</button>
            <h6>{randomNumber}</h6>
        </div>
    );
}


// export class Child extends React.Component {

//     constructor(props) {
//         super(props);
//         //равносильно записи выше 
//         console.log('child\'s constructor');
//         this.state = {
//             count: 0,
//             name: 'Jane',
//             showChild: false,
//         };
//     }

//     componentDidMount() {
//         //компонент смонтирован
//         console.log('child is mounted');
//     }

//     componentWillUnmount() {
//         //не получится увидеть 
//         console.log('child is unmounted');
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log('child is updated', prevProps, prevState);
//     }

//     render() {
//         console.log('child is rendered');
//         return (
//             <div>
//                 <h4>Child component</h4>
//             </div>
//         );
//     }

// }

// export class Counter extends React.Component {
//     // state = {
//     //     count: 0,
//     //     name: 'Jane'
//     // };

//     constructor(props) {
//         super(props);
//         //равносильно записи выше 
//         console.log('constructor');
//         this.state = {
//             count: 0,
//             name: 'Jane'
//         };
//     }

//     componentDidMount() {
//         //компонент смонтирован
//         console.log('mounted');
//         this.interval = setInterval(() => {
//             this.setState(prevState => ({
//                 count: prevState.count + 1
//             }));
//         }, 1000);

//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//         //не получится увидеть 
//         console.log('unmounted');
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log('updated', prevProps, prevState);
//     }

//     increase = () => {
//         // если при подсчете нового значения ипспользуется используется текущий state
//         //то для корректного вычисления важно использовать oldState
//         this.setState((oldState) => ({ count: oldState.count + 1 }), () => {
//             console.log('2nd arg', this.state.count);
//         });
//     }

//     decrease = () => {
//         this.setState((oldState) => ({ count: oldState.count - 1 }), () => {
//             console.log('2nd arg', this.state.count);
//         });
//     }
//     toggleChild = () =>{
//         this.setState(prevState =>({
//             showChild: !prevState.showChild
//         }));
//     }
//     render() {
//         console.log('render');
//         return (
//             <div><h4>{this.state.count}</h4>
//                 <button onClick={this.toggleChild}>Click</button>
//                 {this.state.showChild && <Child />}
//             </div>
//         );
//     }
// }

export const MyButton = ({ onClick, children }) => {
    console.log(children);
    return (<div role="button" onClick={onClick}>{children}</div>);
}

export const OtherButton = ({ onClick }) => {
    return (<div role="button" onClick={onClick}>click</div>);
}


//pattern dekorator

const foo = (a,b) => `${a} + ${b}`;
const baz = () =>  console.log('baz');

function addLog(func){
    return function(...args){
        console.log('helloooooooooo');
        return func(...args);
    }
}

const fooWithLog = addLog(foo);
const bazWithLog = addLog(baz);

fooWithLog(1,2);
bazWithLog();