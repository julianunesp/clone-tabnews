// utilizamos o padrão de import antigo por problemas de compatibilidade do jest com o padrão novo
require("dotenv").config({
  path: ".env.development",
});

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

console.log(process.env.NODE_ENV);

module.exports = jestConfig;
