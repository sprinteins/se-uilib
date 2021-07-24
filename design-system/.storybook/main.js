module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../uilib/**/*.stories.mdx",
    "../uilib/**/*.stories.@(js|jsx|ts|tsx)",
    "../uilib/**/*.stories.svelte",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
  ]
}