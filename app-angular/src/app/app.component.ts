import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app-angular';

    public open = false;
    public _open;

    onMenuClick(){
        this.open = !this.open
        this.syncOpen();
    }

    syncOpen(){
        if (!this.open){
            this._open = undefined
            return;
        }

        this._open = "";
    }
}
