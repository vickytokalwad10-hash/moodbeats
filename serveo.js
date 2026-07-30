const { spawn } = require('child_process');

// Keep the event loop alive indefinitely
setInterval(() => {
  console.log('[Serveo Keepalive] Heartbeat...');
}, 1000 * 60 * 10);

function startServeo() {
  console.log('Starting serveo.net tunnel...');
  const ssh = spawn('ssh', [
    '-o', 'StrictHostKeyChecking=no',
    '-R', '80:localhost:3000',
    'serveo.net'
  ]);

  ssh.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  ssh.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  ssh.on('close', (code) => {
    console.log(`SSH connection closed (code ${code}). Restarting in 5 seconds...`);
    setTimeout(startServeo, 5000);
  });
}

startServeo();
