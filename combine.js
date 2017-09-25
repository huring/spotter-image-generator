const mergeImages = require('merge-images');
const fs = require("fs");
var sys = require("util");

const shootingstring = 5;

var Canvas = require('canvas'), 
    Image = Canvas.Image;

const imgSize = {
    width: 500,
    height: 500
};

for (var i = 0; i < 5; i++) {

    mergeImages(
        [   './assets/Target.png', 
        {   src: './assets/Shot.png', 
            x: getRandomInt(imgSize.width), 
            y: getRandomInt(imgSize.width)
        }], 
        {
            Canvas: Canvas
        }
    ).then(b64 => {
        
        generateImage(b64, i);
           
        }
    );

}

function generateImage(img64, count) {
    console.log('generate image');
    // Cleanup
    var data = img64.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');
    fs.writeFile('./img/target_generated-'+count+'.png', buf, (err) => {
        if (err) throw err;
    });
}

function getRandomInt(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0)) + 0; //The maximum is exclusive and the minimum is inclusive
}