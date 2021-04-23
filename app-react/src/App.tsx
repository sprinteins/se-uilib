import React from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import {adapt} from "webcomponents-with-react"

import '@dp/ui-lib'

function App() {


  const user = {name:'John'}
  const HelloWorld = adapt('hello-world');

  function handleOnClick(){
    alert('Hello, World!');
  }

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
          Learn React?
        </a>
      </header>

      <HelloWorld user={user} />

    </div>
    
  );
}

export default App;
