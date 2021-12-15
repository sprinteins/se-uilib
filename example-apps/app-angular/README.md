# AppAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

The goal of this project is to show how to use the Svelte components in an Angular project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Adding new component

To use a Svelte component in Angular we have to adapt it to Angular syntax.

- Callback functions like on:select should be formatted like (select).

Before:

```js script
on:select={(event) => { /* do something with event.detail */ }} 
```

After:
```js script
(select)="handleSelect($event)"
```

Create a function to receive data within the parent component.

```js script
handleSelect(event: CustomEvent) {
    console.log(`switched to: ${event.detail}`)
    /* do something with event.detail */
}
```

- Pass props using double quotes.

Before: 
defaultpage={2} 

After: 
defaultpage="2"

####The result:

Before (Svelte component in Svelte project):

```js script
<dpdhl-pagination 
    on:select={(event) => { /* do something with event.detail */ }} 
    defaultpage={2} 
    maxpages={10}
    count={12}>
</dpdhl-pagination>
```

After (Svelte component in Angular):

```js script
<dpdhl-pagination
    (select)="handleSelect($event)"
    defaultpage="2"
    maxpages="10"
    count="12">
</dpdhl-pagination>
```

