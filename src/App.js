import logo from './logo.svg';
import './App.css';
import { Message } from './components/message/Message'

const name = 'Julia'; 
const age = 18;

function App() {
  const foo = () =>( alert('Hello') );
  
  return (
    <div className="App">
      <Message name={name} age={age} doSmth={foo} italic={true}/> 
    </div>
  );
}

export default App;
