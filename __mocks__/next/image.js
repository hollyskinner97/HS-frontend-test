const React = require("react");

module.exports = function NextImage(props) {
  const { src, alt, priority, ...rest } = props;
  return React.createElement("img", { src, alt, ...rest });
};
