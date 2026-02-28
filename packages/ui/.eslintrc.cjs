module.exports = {
  extends: ["@unguwa/eslint-config-custom"],
  parserOptions: {
    project: "../../packages/config/tsconfig.base.json",
    tsconfigRootDir: __dirname
  }
};
