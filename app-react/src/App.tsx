import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {adapt} from "./adapter";

import 'dpdhl-uilib';

function App() {

    const ThemeDPDHL = adapt('theme-dpdhl');
    const DPDHLButton = adapt('dpdhl-button');

    const [log, setLog] = useState('')

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            <h1>React App</h1>


            </header>
            
            <ThemeDPDHL>
                <DPDHLButton 
                    onClick={ () => setLog('Button Clicked') }
                    primary="true"
                    size="normal"
                >
                    Primary Button
                </DPDHLButton>
            </ThemeDPDHL>

            <div>
                {log}
            </div>
      
        
        </div>
        
        );
    }
    
    export default App;
    