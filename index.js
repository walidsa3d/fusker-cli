var Fusker = require('node-fusker').Fusker;
var program = require('commander');
var open = require("open");
var download = require('download-file');

program.version('1.0.0')
    .option('-o, --open', 'open urls in default browser')
    .option('-d, --download', 'download files')
    .parse(process.argv);
var fusker = new Fusker();
var fusks = program.args[0];
fusker.load(fusks);
var urls = fusker.getAll();
if (program.open) {
    urls.forEach(function(url) {
        open(url);
    });
} else if (program.download) {

    urls.forEach(function(url){
download_image(url, ".");
      });
   
} else {
    urls.forEach(function(url) {
        console.log(url);
    });
}

function download_image(url, dir){
    var options = {
        directory: ".",
    };
    download(url, options, function(err) {
        if (err) console.log(err);
        else console.log('Downloaded ', url);
    });
}





