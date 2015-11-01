var Fusker = require('node-fusker').Fusker;
var program = require('commander');
var open = require("open");

program.version('1.0.0')
    .option('-o, --open', 'open urls in default browser')
    .parse(process.argv);
var fusker = new Fusker();
var fusks = program.args[0];
fusker.load(fusks);
var urls = fusker.getAll();
if (program.open) {
    urls.forEach(function(url) {
        open(url);
    });
} else {
    urls.forEach(function(url) {
        console.log(url);
    });
}