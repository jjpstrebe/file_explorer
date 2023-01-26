import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import util from 'util';


const dataDirectory = path.join(process.cwd(), 'public', 'external', 'Downloads', 'Frame_Updates');
const relativeImageDir = path.join('/external', 'Downloads', 'Frame_Updates');


function flatten(lists) {
  return lists.reduce((a, b) => a.concat(b), []);
}


function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory());
}


function getDirectoriesRecursive(srcpath, id) {
  var tree =  {id: id, name: path.basename(srcpath), children: [...getDirectories(srcpath).map(p => {var returned = getDirectoriesRecursive(p, id + 1); id = returned[0]; return returned[1]})]};
  return [id, tree];
}


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
    const dimensions = sizeOf(path.join(dataDirectory, fileName));
    var w = 300;
    var h = 400;
    if (dimensions.width > dimensions.height) {
      w = 400;
      h = 300;
    }
    // Create the object that the photo album needs.
    return {
      src: path.join(relativeImageDir, fileName),
      width: w,
      height: h
    };
  });
  return allImageFiles;;
}


export function getImageDirectoryTree() {
//  console.log(util.inspect(getDirectoriesRecursive(dataDirectory, 1)[1], false, null, true));
  return getDirectoriesRecursive(dataDirectory, 1)[1];
}
