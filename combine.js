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
var files = 0;
var baseTarget = './assets/Target.png';

imgMerge();

async function imgMerge() {

    console.log(baseTarget);

    let merge = await mergeImages([   
        baseTarget, 
        {   
            src: './assets/Shot.png', 
            x: helpers.randomInt(imgSize.width), 
            y: helpers.randomInt(imgSize.width)
        }], 
        {
            Canvas: Canvas
        }
    )
    generateImage(merge);
}
//     .then(function(b64) {
//         generateImage(b64, count);
//         count++;
//     }
// );

function generateImage(img64) {
    // Cleanup
    var data = img64.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');

    if (files <= 3) {
        
        var fileName = 'target-' + helpers.randomAlphaNumeric(5) + '.png';
        console.log(fileName);

        fs.writeFile('./img/'+fileName, buf, (err) => {
            if (err) throw err;

            baseTarget = './img/'+fileName;
            imgMerge();

        });
    }

    files++;
}