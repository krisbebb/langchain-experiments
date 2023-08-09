import fs from 'fs';
import path from 'path';

export function writeToFileWithTimestamp(
  data,
  filenamePrefix,
  fileExtension = 'txt'
) {
  const date = new Date();

  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.toLocaleString('default', { day: '2-digit' });
  const hour = date.toLocaleString('default', {
    hour: '2-digit',
    hour12: false,
  });
  const minute = date.toLocaleString('default', { minute: '2-digit', hour12: false });
  const second = date.toLocaleString('default', { second: '2-digit', hour12: false });

  const timestamp = `${year}-${month}-${day}_${hour}-${minute}-${second}`;

  console.log(timestamp); // Outputs something like "2023-Jul-20_14-25-30"

  const filename = `${filenamePrefix}_${timestamp}.${fileExtension}`;

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
