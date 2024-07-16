import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "1wz2na",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here

    // },
    // experimentalStudio: true,
    baseUrl: "http://localhost:5173",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'

  },

  component: {
    projectId: "1wz2na",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: 'cypress/component/**/*.{js,jsx,ts,tsx}'
  }
});
// projectId: "1wz2na",