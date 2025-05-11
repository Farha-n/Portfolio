const { exec } = require('child_process');

console.log('Starting build process...');

// Use exec instead of spawn to handle permissions better
exec('node node_modules/vite/bin/vite.js build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during build: ${error.message}`);
    console.error(stderr);
    process.exit(1);
  }
  
  console.log(stdout);
  console.log('Build completed successfully');
});
