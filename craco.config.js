const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@enums": path.resolve(__dirname, "./src/enums"),
      "@api": path.resolve(__dirname, "./src/api"),
    },
  },
};
