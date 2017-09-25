const mergeImages = require('merge-images');
const fs = require("fs");
var sys = require("util");
var helpers = require('./js/lib/helpers');

const shootingstring = 5;

var Canvas = require('canvas'), 
    Image = Canvas.Image;

const imgSize = {
    width: 500,
    height: 500
};

var count = 0;
var baseImage = './assets/Target.png';

for (var i = 0; i < 5; i++) {

    if (i != 0)
        baseImage = './img/target_generated-'+(i-1)+'.png';

    console.log(baseImage);

    mergeImages(
        [   baseImage, 
        {   src: './assets/Shot.png', 
            x: helpers.randomInt(imgSize.width), 
            y: helpers.randomInt(imgSize.width)
        }], 
        {
            Canvas: Canvas
        }
    ).then(function(b64) {
            generateImage(b64, count);
            count++;
        }
    );

}

function generateImage(img64, count) {
    // Cleanup
    var data = img64.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');
    fs.writeFile('./img/target_generated-'+count+'.png', buf, (err) => {
        if (err) throw err;
    });
}