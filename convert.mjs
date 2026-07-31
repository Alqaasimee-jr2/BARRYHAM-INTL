import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';
const TARGET_WIDTH = 1200; // reasonable max width for hero/bento images to keep them under 150kb

const images = [
  'hero-main.png',
  'bento-foyer.png',
  'bento-detail.png',
  'service-plumbing.png',
  'service-tiles.png',
  'service-interior.png'
];

async function convertImages() {
  for (const file of images) {
    const inputPath = path.join(PUBLIC_DIR, file);
    const outputPath = path.join(PUBLIC_DIR, file.replace('.png', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      await sharp(inputPath)
        .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
        .webp({ quality: 82 }) // 80-85% quality
        .toFile(outputPath);
      console.log(`Converted ${file} to WebP`);
    }
  }
}

convertImages().catch(console.error);
