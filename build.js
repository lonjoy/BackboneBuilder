var 
      fs     = require('fs')
    , Config = require('./config/config.backbone')
    , Parser = require('./build/parser')
    , main
    ;

main = function(){
    fs.readFile(Config.MainFile,function(err,data){
        var result;
        if(err){console.log(err);return;}

        result = new Parser(data.toString(),Config.MainFile);
        fs.writeFile('pack.js',result.render(),function(err){
            if(err){console.log(err);return;}
        });
       
        
    });
};

main();