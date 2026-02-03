module.exports = {
  apps: [
    {
      name: "deen-landing",
      script: "npm",
      args: "start",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      exec_interpreter: "none",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        APP_ENV: "production",
        PORT: 3010,
      },
      error_file: "./logs/deen-landing-error.log",
      out_file: "./logs/deen-landing-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
    },
  ],
};
