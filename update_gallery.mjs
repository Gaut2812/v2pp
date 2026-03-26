import fs from 'fs';

const urls = JSON.parse(fs.readFileSync('cloudinary_urls.json', 'utf8'));
let content = fs.readFileSync('src/data/galleryData.js', 'utf8');

// Replace import statements with const string declarations
content = content.replace(/import\s+(\w+)\s+from\s+['"]@\/assets\/gallery\/(.+?)['"];/g, (match, varName, fileName) => {
  if (urls[fileName]) {
    return `const ${varName} = "${urls[fileName]}";`;
  }
  return match; // fallback if not found
});

fs.writeFileSync('src/data/galleryData.js', content);
console.log('Successfully updated src/data/galleryData.js with Cloudinary URLs');
