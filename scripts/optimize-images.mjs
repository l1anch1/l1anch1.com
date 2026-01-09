import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = './public/projects';
const OUTPUT_DIR = './public/projects';
const MAX_WIDTH = 800;
const QUALITY = 80;

async function optimizeImages() {
  const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.png'));
  
  console.log(`🖼️  Found ${files.length} images to optimize...\n`);
  
  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputName = file.replace('.png', '.webp');
    const outputPath = path.join(OUTPUT_DIR, outputName);
    
    const originalStats = fs.statSync(inputPath);
    const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);
    
    try {
      await sharp(inputPath)
        .resize(MAX_WIDTH, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024).toFixed(0);
      const savings = (100 - (newStats.size / originalStats.size * 100)).toFixed(1);
      
      console.log(`✅ ${file}`);
      console.log(`   ${originalSize}MB → ${newSize}KB (${savings}% smaller)\n`);
    } catch (error) {
      console.error(`❌ Failed to optimize ${file}:`, error.message);
    }
  }
  
  console.log('🎉 Done! Remember to update your code to use .webp files.');
}

optimizeImages();

