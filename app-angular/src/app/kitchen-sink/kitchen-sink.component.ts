import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-kitchen-sink',
    templateUrl: './kitchen-sink.component.html',
    styleUrls: ['./kitchen-sink.component.css']
})
export class KitchenSinkComponent implements OnInit {

    log = '';


    constructor() { }

    ngOnInit(): void {
    }

    handleClick(buttonName: string){
        this.log = `clicked on ${buttonName}`
    }

}
