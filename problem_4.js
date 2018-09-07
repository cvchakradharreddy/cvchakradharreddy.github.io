var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var counter = 0;
var parked, t, p, l, arr;

rl.on('line', function(line){
   if(line==''){
      consle.log("reached end");
    }
    counter++;
})
