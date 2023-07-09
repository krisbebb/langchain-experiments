import fs from 'fs';
import path from 'path';

export function writeToFileWithTimestamp(data, filenamePrefix) {
  const date = new Date();
  let timestamp = date.toISOString().replace(/:/g, '-'); // replace colons with hyphens

  // Remove milliseconds and 'T' from the timestamp
  timestamp = timestamp.slice(0, timestamp.indexOf('.')).replace('T', '_');

  const filename = `${filenamePrefix}_${timestamp}.txt`;

  const dir = './outputs';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = path.join(dir, filename);

  fs.writeFile(filePath, data, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Data written to file: ${filePath}`);
  });
}
