module.exports = {
  "extends": ["airbnb-base", "plugin:react/recommended"],
  "env": {
    "browser": true,
  },
  plugins: ["react"],
  "rules": {
    "linebreak-style": 0,
  },
  "rules": {
    "class-methods-use-this": ["warn", {
      "exceptMethods": [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
      ],
    }],
  },
};
