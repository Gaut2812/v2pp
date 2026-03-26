import { execSync } from 'child_process';
import fs from 'fs';

const filesToRename = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
];

for (const name of filesToRename) {
  const original = `src/assets/gallery/${name}.JPG`;
  const temp = `src/assets/gallery/${name}_tmp.jpg`;
  const final = `src/assets/gallery/${name}.jpg`;
  
  try {
    // Check if the file exists on disk as .jpg or .JPG
    const exists = fs.existsSync(original) || fs.existsSync(final);
    if (!exists) continue;

    console.log(`Renaming ${name}.JPG in git...`);
    // git mv original temp
    execSync(`git mv ${original} ${temp}`);
    // git mv temp final
    execSync(`git mv ${temp} ${final}`);
  } catch (err) {
    console.error(`Error renaming ${name}.JPG: ${err.message}`);
  }
}
