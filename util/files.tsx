import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'public', 'external', 'Downloads', 'Frame_Updates');
const relativeImageDir = path.join('/external', 'Downloads', 'Frame_Updates');

export function getImages() {
  // Find all images files.
  var imageFiles = []
  fs.readdirSync(dataDirectory).forEach(file => {
    const extension = path.extname(file).toLowerCase();
    if (extension == ".jpg" ||
        extension == ".jpeg")
    {
      imageFiles.push(file);
    }
  });
  const allImageFiles = imageFiles.map((fileName) => {
    // Create the object that the photo album needs.
    return {
      src: path.join(relativeImageDir, fileName),
      width: 600,
      height: 600
    };
  });
  return allImageFiles;;
}
