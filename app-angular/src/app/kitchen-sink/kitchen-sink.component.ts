import { Component } from '@angular/core';

@Component({
    selector: 'app-kitchen-sink',
    templateUrl: './kitchen-sink.component.html',
    styleUrls: ['./kitchen-sink.component.css']
})
export class KitchenSinkComponent {

    log = '';

    handleClick(buttonName: string){
        this.log = `clicked on ${buttonName}`
    }

}
