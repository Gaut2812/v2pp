import fs from 'fs';
import path from 'path';

const dir = './src/assets/gallery';
const files = fs.readdirSync(dir);

// Delete original unoptimized files
for (const file of files) {
  if ((file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) && !file.includes('_optimized')) {
    try {
      fs.unlinkSync(path.join(dir, file));
      console.log(`Deleted ${file}`);
    } catch (e) {
      console.error(`Failed to delete ${file}: ${e.message}`);
    }
  }
}

// Rename optimized files
const remaining = fs.readdirSync(dir);
for (const file of remaining) {
  if (file.includes('_optimized.jpg')) {
    const newName = file.replace('_optimized', '');
    try {
      fs.renameSync(path.join(dir, file), path.join(dir, newName));
      console.log(`Renamed ${file} to ${newName}`);
    } catch (e) {
      console.error(`Failed to rename ${file}: ${e.message}`);
    }
  }
}
