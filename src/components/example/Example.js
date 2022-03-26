import { useState } from 'react';

export const Counter = () => {
    // передача изначального состояния 
    const [count, setCount] = useState(11);
    return (
        <div><h4>{ count }</h4>
         {/* работа с переменной */}
            <button onClick={() => setCount(count + 1) }>Click</button>
        </div>
    );
} 
