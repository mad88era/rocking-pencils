const generateLogo = require('./lib/logoGenerator');
const { exec } = require('child_process');
const path = require('path');

async function openSVGFileInBrowser() {
  const filePath = path.join(__dirname, 'examples', 'logo.svg');
  exec(`start ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening SVG file: ${error}`);
      return;
    }
    console.log('SVG file opened successfully in browser.');
  });
}

async function runApplication() {
  await generateLogo();
  await openSVGFileInBrowser();
}

runApplication();