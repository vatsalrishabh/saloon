module.exports = {
    apps: [
      {
        name: "apusaloon",
        script: "npm",
        args: "start",
        cwd: "/path/to/apusaloon", // Update this path
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  