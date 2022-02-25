module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return {
    ...config,
    externals: {
      canvg: "canvg",
      html2canvas: "html2canvas",
      dompurify: "dompurify",
    },
  };
};
