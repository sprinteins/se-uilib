import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KitchenSinkModule } from './kitchen-sink'
import '@dp/ui-lib'

@NgModule({
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        KitchenSinkModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
