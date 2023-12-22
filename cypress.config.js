const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
const broweserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on,config){
  await preprocessor.addCucumberPreprocessorPlugin(on,config);
  on("file:preprocessor", broweserify.default(config));
  return config;
}

module.exports = defineConfig({
  pageLoadTimeout : 5000,
  video : false,
  defaultCommandTimeout : 5000,
  e2e: {
    specPattern: "**/*.feature",
    supportFile : false,
    nonGlobalStepDefinitions : true,
    setupNodeEvents,    
    },
  });
