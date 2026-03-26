import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './src/assets/gallery';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.JPG') || file.endsWith('.jpeg')) {
    if (file.includes('_optimized')) continue;
    
    const filePath = path.join(dir, file);
    const parsed = path.parse(filePath);
    const newName = parsed.name + '_optimized.jpg';
    const newPath = path.join(dir, newName);

    console.log(`Processing ${file}...`);
    try {
      await sharp(filePath)
        .rotate()
        .resize({ width: 1920, withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toFile(newPath);
      console.log(`Successfully optimized and saved ${newName}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}
