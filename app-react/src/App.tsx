import React, { useState } from 'react';
import './App.css';

import {adapt} from "./adapter";

import 'dpdhl-uilib';

function App() {

    const ThemeDPDHL = adapt('theme-dpdhl');
    const DPDHLButton = adapt('dpdhl-button');

    const [log, setLog] = useState('')

    return (
        <div className="App">
            <h1>React App</h1>
            
            <ThemeDPDHL>
                <div className="container">
                    <div>
                        <DPDHLButton 
                            onClick={ () => setLog('Button Clicked') }
                            type="Primary"
                        >
                            Button
                        </DPDHLButton>
                        </div>

                        <div><DPDHLButton>Button</DPDHLButton></div>
                        <div><DPDHLButton type="Text">Button</DPDHLButton></div>
                        <div><DPDHLButton type="Postyellow">Button</DPDHLButton></div>

                        <div><DPDHLButton size="Small" type="Primary">Button</DPDHLButton></div>
                        <div><DPDHLButton size="Small" type="Secondary">Button</DPDHLButton></div>
                        <div><DPDHLButton size="Small" type="Text">Button</DPDHLButton></div>
                        <div><DPDHLButton size="Small" type="Postyellow">Button</DPDHLButton></div>

                        <div><DPDHLButton size="Tiny" type="Primary">Button</DPDHLButton></div>
                        <div><DPDHLButton size="Tiny" type="Secondary">Button</DPDHLButton></div>
                        <div><DPDHLButton size="Tiny" type="Text">Button</DPDHLButton></div>
                        <div><DPDHLButton size="Tiny" type="Postyellow">Button</DPDHLButton></div>

                </div>

            </ThemeDPDHL>

            <div>
                {log}
            </div>
      
        
        </div>
        
        );
    }
    
    export default App;
    