module.exports = {
    apps: [
      {
        name: "upload",
        script: "./dist/index.js",
        env: {
          PORT: 5000,
          NODE_ENV: "production",
        },
      }
    ],
  };
  