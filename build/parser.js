var       fs  = require('fs')    , context = {          Config : {              Backbone : require('./../config/config.backbone')        }                , Include   : function(str){            var str,result;            str = fs.readFileSync(str).toString();                        return ((new Parser(str)).render());        }        , IncludeIf : function(condition,str){            return condition ?                context.Include(str) : '';        }                , IncludeJoin : function(str,paths){            var                   dir = paths.split(/\//g)                , result = []                , mResult = []                ;                        dir.length--;            dir = dir.join('/');            fs.readdirSync(dir).forEach(function(v,k){                var                       path = dir + "/" + v.replace(/\.js$/g,'') + ".js"                    , re = new RegExp(paths.replace(/\//g,'\\\/').replace(/\./,'\\\.'))                    ;                                if(re.test(path)){                    if(path != paths.replace('.*','')){                        result.push(path);                    }                }                            });            result.forEach(function(v,k){                mResult.push(context.Include(v));            });            return mResult.join(str + "\n");        }                , Push : function(varbiable,str){                    }    };var Parser = function(str){    this.str = str.replace(/\\/g,"\\\\")                    .replace(/\//g,"\\\/")                    .replace(/\"/g,"\\\"")                    .replace(/\'/g,"\\\'")                    .replace(/\r\n/g,"\\n")                    .replace(/\r/g,"\\n")                    .replace(/\n/g,"\\n")                    .replace(/\<\$/g,"\n<$")                    .replace(/\$\>/g,"$>\n")                    .split(/\n/g)                    ;    for(var i = 0, j = this.str.length; i < j; i++){        this.str[ i ].indexOf('<$') == 0 ?            0 :            this.str[ i ] = "m.push(\"" + this.str[ i ] + "\");\n";    }        this.str = this.str.join('').replace(/\<\$\=(.*?)\$\>/gm,function(m,$1){                        var $1 = $1.replace(/Include\(/g,"this.Include(")                                    .replace(/IncludeIf\(/g,"this.IncludeIf(")                                    .replace(/IncludeJoin\(/g,"this.IncludeJoin(")                                    .replace(/Push\(/g,"this.Push(")                                    .replace(/Config\./g,"this.Config.")                                    .replace(/\\/g,"")                                    ;                        return "\nm.push(" + $1 + ");\n";                    })                    .replace(/\<\$(.*?)\$\>/gm,function(m,$1){                         var $1 = $1.replace(/Include\(/g,"this.Include(")                                    .replace(/IncludeIf\(/g,"this.IncludeIf(")                                    .replace(/IncludeJoin\(/g,"this.IncludeJoin(")                                    .replace(/Push\(/g,"this.Push(")                                    .replace(/Config\./g,"this.Config.")                                    .replace(/\\/g,"")                                    ;                        return "\n" + $1.replace(/\\/g,'') + "\n";                    });    this.str =  "\nvar m = [];\n" + this.str + "\nreturn m.join('');";    var b = new Function( this.str );        this.source =  b.call(context);        };Parser.prototype.render = function(){    return this.source;}module.exports = Parser;