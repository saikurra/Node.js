console.log('Hi THis is node');

var fs = require("fs");

fs.readFile("example_log.txt", function(err, logData){
    if(err){
        console.log("Error");
        throw err;
    }
    var text = logData.toString();
    
    var results = {};
    
    var lines = text.split("\n");
    console.log(lines.length);
    
    lines.forEach(function(line){
        var parts = line.split(" ");
        var letter = parts[1];
        var count = parseInt(parts[2]);
        
        if(!results[letter]){
            results[letter] = 0;
        }
        
        results[letter] += parseInt(count); 
    });
    
    console.log(results);
});