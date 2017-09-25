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

mergeImages(['./assets/Target.png', {
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
    var buf = new Buffer(data, 'base64');
    fs.writeFile('./img/target_generated.png', buf, (err) => {
        if (err) throw err;
    });
}
    
).catch(function(err) {
    // console.error(err);
});

function getRandomInt(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0)) + 0; //The maximum is exclusive and the minimum is inclusive
}