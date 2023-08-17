const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity:false, // Deshabilitamos 'chromeWebSecurity' para permitir pruebas que violarían las políticas de seguridad web, de Chrome. Sin esta linea da error a la hora de esperar el evento "load" de Chrome en el proyecto
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
