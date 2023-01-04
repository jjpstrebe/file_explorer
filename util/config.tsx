import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data', 'config');

export function getConfigData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(dataDirectory);
  const allConfigData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.json$/, '');

    // Read markdown file as string
    const fullPath = path.join(dataDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const jsonData = JSON.parse(fileContents);

    // Combine the data with the id
    return {
      id,
      jsonData,
    };
  });
  return allConfigData;
}
