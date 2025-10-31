module.exports = {
  apps: [{
    name: 'app',
    cwd: "app"
    script: 'npm', // or your entry file
    args: "run start"
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 5005
    },
    // PM2 will write logs to ~/.pm2/logs/
    error_file: '~/.pm2/logs/app-error.log',
    out_file: '~/.pm2/logs/app-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    merge_logs: true
  }]
};
