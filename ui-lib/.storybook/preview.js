import ThemeProviderDecorator from './decorator.svelte';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [() => ThemeProviderDecorator];