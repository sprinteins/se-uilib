import React from 'react';
import logo from './logo.svg';
import './App.css';

import '@dp/ui-lib'

function App() {


  const user = {name:'John'}

  function handleOnClick(){
    alert('Hello, World!');
  }

  const TableRow = (
    <div>
      <span>1</span>|<span>2</span>
    </div>
  )
  
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
      {TableRow}

      {/* @ts-ignore  */}
      <hello-world onClick={handleOnClick}>
        <span slot="greeting">
          Welcome
	      </span>
        <span slot="name">
          P. Sherman
	      </span>
      {/* @ts-ignore */}
      </hello-world>
      
      {/* @ts-ignore  */}
      {/* <hello-world onClick={handleOnClick}>{TableRow}</hello-world> */}

    </div>
    
  );
}

export default App;
