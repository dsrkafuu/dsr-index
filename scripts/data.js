const path = require('path');
const fs = require('fs');

const dataSet = ['music'];

const t = Date.now();
console.log('fetching data json files...');

const dataDir = path.resolve(__dirname, '../data');
const dataFiles = fs.readdirSync(dataDir).filter((filename) => path.extname(filename) === '.json');

let outPath = path.resolve(__dirname, '../static');
if (!fs.existsSync(outPath)) {
  fs.mkdirSync(outPath);
}
outPath = path.join(outPath, '_data');
if (!fs.existsSync(outPath)) {
  fs.mkdirSync(outPath);
}

for (const filename of dataFiles) {
  const basename = path.basename(filename, '.json');
  if (dataSet.includes(basename)) {
    const srcPath = path.join(dataDir, filename);
    const filePath = path.join(outPath, `${basename}.min.json`);
    fs.writeFileSync(
      filePath,
      JSON.stringify(JSON.parse(fs.readFileSync(srcPath, { encoding: 'utf8' }))),
      { encoding: 'utf8' }
    );
  }
}
console.log(`processed data json files in ${Date.now() - t}ms`);
