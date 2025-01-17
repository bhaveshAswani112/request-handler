module.exports = {
    apps: [
      {
        name: "upload",
        script: "./dist/index.js",
        env: {
          PORT: 4000,
          NODE_ENV: "production",
        },
      }
    ],
  };
  