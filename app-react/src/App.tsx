import React, { useState } from 'react';
import './App.css';

import {adapt} from "./adapter";

import 'dpdhl-uilib';

function App() {

    const ThemeDPDHL = adapt('dpdhl-theme');
    const DPDHLButton = adapt('dpdhl-button');
    const DPDHLTable = adapt('dpdhl-table');

    const [log, setLog] = useState('')

    // const menuItems = [
    //     { label: "Menu 1", click: () => { alert('You have selected "Menu 1"') }},
    //     { label: "Menu 2", click: () => { alert('You have selected "Menu 2"') }},
    //     { label: "Menu 3", click: () => { alert('You have selected "Menu 3"') }},
    // ]

    const tableTitle = "Table heading"
    const tableFooter = "*Table footer annotation"
    const tableRows = [
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
    ]
    const tableHeaders = ["","Column title 1", "Column title 2"]

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

                        <div>
                            <DPDHLTable title={tableTitle} footer={tableFooter}>
                                
                                <thead slot="head">
                                    <tr>
                                    { tableHeaders.map(header => <td>{header}</td> )}
                                    </tr>
                                </thead>

                                <tbody slot="body">
                                    {tableRows.map( row => {
                                        return (
                                            <tr>
                                                {Object.values(row).map( cell => <td>{cell}</td> )}
                                            </tr>
                                        )
                                    })}

                                </tbody>

                            </DPDHLTable>
                        </div>

                </div>

            </ThemeDPDHL>

            <div>
                {log}
            </div>
      
        
        </div>
        
        );
    }
    
    export default App;
    