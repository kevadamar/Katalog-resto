const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  console.log(image);
  if (image.includes('hero-image')) {
    // convert hero image lebar 1200px -> xtra large
    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-xl.jpg`,
        ),
      );

    // convert hero image lebar 600px -> small
    sharp(`${target}/${image}`)
      .resize(600)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-sm.jpg`,
        ),
      );
  } else {
    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
        ),
      );

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
        ),
      );
  }
});
