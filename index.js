var PNGImage = require('pngjs-image');

var image = PNGImage.createImage(100,100);

console.log(image.getWidth());
console.log(image.getHeight());

image.setAt(50, 50, {red: 0, green: 255, blue: 0, alpha: 255});

image.writeImage('img/file.png', function(err) {
    if (err) throw err;
    console.log('Written to file');
});