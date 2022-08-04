import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import './App.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* // <p style={{color: 'gold', fontSize: '50px'}}>
        //   mi nombre es Mateo
        // </p> */}
        <Counter />
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: '5px'}}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't Click
        </a>
      </header>
    </div>
  );
}

export default App;
