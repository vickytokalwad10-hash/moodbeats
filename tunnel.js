const localtunnel = require('localtunnel');

// Keep the event loop alive indefinitely
setInterval(() => {
  console.log('[Tunnel Keepalive] Heartbeat...');
}, 1000 * 60 * 10); // Log every 10 minutes

async function startTunnel() {
  console.log('Starting localtunnel...');
  try {
    const tunnel = await localtunnel({ port: 3000, subdomain: 'moodbeats-vibe-player' });
    console.log('your url is:', tunnel.url);
    
    tunnel.on('close', () => {
      console.log('Tunnel closed. Restarting in 5 seconds...');
      setTimeout(startTunnel, 5000);
    });
    
    tunnel.on('error', (err) => {
      console.error('Tunnel error:', err);
      try { tunnel.close(); } catch(e){}
    });
  } catch (err) {
    console.error('Error starting tunnel:', err);
    setTimeout(startTunnel, 5000);
  }
}

startTunnel();
