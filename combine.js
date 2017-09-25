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

var baseTarget = './assets/Target.png';

for (var index = 0; index < shootingstring; index++) {
    if (index >= 1)
        baseTarget = './img/target_generated-'+(index-1)+'.png';

    var img = generate(baseTarget).then(function() { console.log('waiting...') } );

    console.log(img);

    // var buf = new Buffer(img, 'base64');
    // fs.writeFile('./img/target_generated'+index+'.png', buf, (err) => {
    //     if (err) throw err;
    // });

}

function generate(baseTarget) {

    mergeImages([baseTarget, {
            src: './assets/Shot.png', 
            x: getRandomInt(imgSize.width), 
            y: getRandomInt(imgSize.width)
        }], 
        {
            Canvas: Canvas
        }
    )
    .then(b64 => {
        
        // Cleanup
        var data = b64.replace(/^data:image\/\w+;base64,/, "");
        return data;
    }
        
    ).catch(function(err) {
        // console.error(err);
    });
}

function getRandomInt(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0)) + 0; //The maximum is exclusive and the minimum is inclusive
}