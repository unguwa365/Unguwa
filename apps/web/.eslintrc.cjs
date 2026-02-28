module.exports = {
  extends: ["@unguwa/eslint-config-custom"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  }
};
