// docs/.vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // register your custom global components
  },
} satisfies Theme;
