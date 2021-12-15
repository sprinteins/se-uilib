# Example project with ReactJS

The goal of this project is to show how to use the Svelte components in a React project.


## How to add new component

- Import UI library and adapter function:

```js script
import '@sprinteins/dpdhl-uilib';
import {adapt} from "./adapter";
```

- Initialise a component using an adapter function and a name of the component:

```js script
const Pagination = adapt('dpdhl-pagination')
```

- Next step is to transform svelte component into React syntax. 
Callback functions like On:select should be renamed to onSelect.

Svelte:

```js script
on:select={(event) => { /* do something with event.detail */ }} 
```

React:
```js script
onSelect={(event) => { /* do something with event.detail */ }} 
```

The rest of the props should be passed as usual.

####The result:

Before (Svelte component in Svelte project):

```js script
<dpdhl-pagination 
    on:select={(event) => { /* do something with event.detail */ }} 
    defaultpage={selectedPage} 
    maxpages={10}
    count={12}>
</dpdhl-pagination>
```

After (Svelte component in React):

```js script
<Pagination
    onSelect={(event) => { /* do something with event.detail */ }}
    defaultpage={selectedPage}
    maxpages={10}
    count={12}>
</Pagination>
```
