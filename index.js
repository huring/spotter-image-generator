const mergeImages = require('merge-images');
const fs = require("fs");
var helpers = require('./js/lib/helpers');
var Canvas = require('canvas'), 
    Image = Canvas.Image;

const imgSize = {
    width: 500,
    height: 500
};

// Internal variables
let count = 0,
    files = 0,
    shootingStringMax = 10,
    baseTarget = './assets/Target.png';

// We start by cleaning out the directory
helpers.rmDir('img/', false);

imgMerge();

if (process.argv[2].length > 0)
    shootingStringMax = process.argv[2] - 1;

async function imgMerge() {

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

function generateImage(img64) {

    var data = img64.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');

    if (files <= shootingStringMax) {
        
        var fileName = (files+1) + '-target.png';

        fs.writeFile('./img/'+fileName, buf, (err) => {
            if (err) throw err;

            baseTarget = './img/'+fileName;
            imgMerge();

        });
    } else {
        console.log("Images generated");
    }

    files++;
}