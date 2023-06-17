import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

    const [userInput, setUserInput] = useState(0);

    function input(s) {
        Axios.post(`http://localhost:8000/input`, {
            input: s
        }).then((res) => {
            let stringLength = res.data["stringLength"];
            setUserInput(stringLength);
        })
    }

  return (
    <div className="App">
        <p>You have entered a message with {userInput} characters!</p>
      <div>
        <textarea id="user-input" onChange={(e) => input(e.target.value)}></textarea>
      </div>
    </div>
  );
}

export default App;
