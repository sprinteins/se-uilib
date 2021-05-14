import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {adapt} from "./adapter";

import 'dpdhl-uilib';

function App() {
    const ThemeDPDHL = adapt('dpdhl-theme');
    const DPDHLButton = adapt('dpdhl-button');
    const DPDHLCardSimple = adapt('dpdhl-card-simple')
    const DPDHLTable = adapt('dpdhl-table');
    const DPDHLTr = adapt('dpdhl-tr');
    const DPDHLTd = adapt('dpdhl-td');
    const DPDHLTh = adapt('dpdhl-th');
    const DPDHLThead = adapt('dpdhl-thead');
    const DPDHLTbody = adapt('dpdhl-tbody');
    const DPDHLTabs = adapt('dpdhl-tabs')
    const DPDHLTab = adapt('dpdhl-tab')

    const [log, setLog] = useState('')

    const menuItems = [
        { label: "Menu 1", click: () => { alert('You have selected "Menu 1"') }},
        { label: "Menu 2", click: () => { alert('You have selected "Menu 2"') }},
        { label: "Menu 3", click: () => { alert('You have selected "Menu 3"') }},
    ]

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
                            <DPDHLCardSimple
                                title="Card Title"
                                content="Card Content"
                                button_label="main action"
                                menu_items={menuItems}
                                onClick={ () => { alert('🐞 you clicked main action' );}}
                            />
                        </div>



                        <div>
                            <DPDHLTable title={tableTitle} footer={tableFooter}>
                                
                                <DPDHLThead slot="head">
                                    <DPDHLTr>
                                    { tableHeaders.map( (header,hi) => <DPDHLTd key={hi}>{header}</DPDHLTd> )}
                                    </DPDHLTr>
                                </DPDHLThead>

                                <DPDHLTbody slot="body">
                                    {tableRows.map( row => {
                                        return (
                                            <DPDHLTr>
                                                {Object.values(row).map( (cell, ci) => <DPDHLTd key={ci}>{cell}</DPDHLTd> )}
                                            </DPDHLTr>
                                        )
                                    })}

                                </DPDHLTbody>

                            </DPDHLTable>
                        </div>

                        <div>
                            <DPDHLTabs>
                                <DPDHLTab label="Tab 1 Title">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. 
                                </DPDHLTab>
                                <DPDHLTab label="Tab 2 Title" active>
                                    At vero eos et accusam et justo duo dolores et ea rebum. 
                                    Stet clita kasd gubergren, no sea takimata sanctus est 
                                    Lorem ipsum dolor sit amet. 
                                </DPDHLTab>
                                <DPDHLTab label="Tab 3 Title">
                                    Proin consectetur at dui ut mollis. Praesent sit amet tempor sem, 
                                    et egestas lorem. Vestibulum ante ipsum primis in faucibus orci
                                    luctus et ultrices posuere cubilia curae
                                </DPDHLTab>
                            </DPDHLTabs>
                        </div>

                </div>

            </ThemeDPDHL>

            <div>
                {log}
            </div>
      
        
        </div>
        
        );
    
    
}

export default App
