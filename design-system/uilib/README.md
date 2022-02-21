# UI Lib

## CSS API

```
---<compoment>--<variant>__<property>
```

- variant is optional
- always provide a default value

e.g.:
```css
main {
    background-color: var(--app-bar__background-color, var(--color-postyellow));
}
```