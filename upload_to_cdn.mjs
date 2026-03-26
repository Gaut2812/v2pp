import fs from 'fs';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET
});

const dir = './src/assets/gallery';
const files = fs.readdirSync(dir);
const urlMap = {};

async function uploadImages() {
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const filePath = path.join(dir, file);
      console.log(`Uploading ${file}...`);
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: 'v2pp_gallery',
          use_filename: true,
          unique_filename: false,
          overwrite: true
        });
        urlMap[file] = result.secure_url;
        console.log(`Successfully uploaded ${file}: ${result.secure_url}`);
      } catch (err) {
        console.error(`Error uploading ${file}:`, err);
      }
    }
  }
  
  fs.writeFileSync('cloudinary_urls.json', JSON.stringify(urlMap, null, 2));
  console.log('Finished uploading. Saved URLs to cloudinary_urls.json');
}

uploadImages();
