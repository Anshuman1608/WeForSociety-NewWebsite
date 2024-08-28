import React from 'react';
import logo from './logo.svg';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

AOS.init({
  duration: 1000, // Duration of animations in milliseconds
  once: true, // Whether animation should happen only once or every time you scroll up/down to the element
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
