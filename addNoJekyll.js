const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'build', '.nojekyll');
fs.writeFileSync(filePath, '');
console.log('.nojekyll file created.');
