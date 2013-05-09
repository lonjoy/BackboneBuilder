var       fs  = require('fs')    , context = {          Config : {              Backbone : require('./../config/config.backbone')            , hasLoadFiles : []        }                , Include   : function(str){            var str,result;                        str = filterFile(str);                        if(!canLoadFile(str)){                return "";            }                        context.Config.hasLoadFiles[str] = true;                        str = fs.readFileSync(str).toString();                        return ((new Parser(str)).render());        }        , IncludeIf : function(condition,str){            return condition ?                context.Include(str) : '';        }                , IncludeJoin : function(str,paths){            var                   dir = paths.split(/\//g)                , result = []                , mResult = []                ;                        dir.length--;            dir = dir.join('/');            fs.readdirSync(dir).forEach(function(v,k){                var                       path = dir + "/" + v                    , re = new RegExp(paths.replace(/\//g,'\\\/').replace(/\./,'\\\.'))                    ;                                if(re.test(path)){                    if(path != paths.replace('.*','')){                        result.push(path);                    }                }                            });            result.forEach(function(v,k){                var s = context.Include(v);                                if(s.replace(/^\s+|\s+$/g,'').length){                    mResult.push(s);                }                            });            return mResult.join(str + "\n");        }                , Push : function(varbiable,str){                        str = filterFile(str);                        context.Config.Backbone.Underscore.Require[str] = true;                        }    };var canLoadFile = function(str){        if((str in context.Config.hasLoadFiles) || (str in context.Config.Backbone.Underscore.NotLoadFiles)){        return false;    }        return true;};var filterFile = function(str){    var list = {          'src/Underscore/_.forEach.js' : 'src/Underscore/_.each.js'        , 'src/Underscore/_.collect.js' : 'src/Underscore/_.map.js'        , 'src/Underscore/_.foldr.js' : 'src/Underscore/_.reduceRight.js'        , 'src/Underscore/_.foldl.js' : 'src/Underscore/_.reduce.js'        , 'src/Underscore/_.detect.js' : 'src/Underscore/_.find.js'        , 'src/Underscore/_.select.js' : 'src/Underscore/_.filter.js'        , 'src/Underscore/_.all.js' : 'src/Underscore/_.every.js'        , 'src/Underscore/_.some.js' : 'src/Underscore/_.any.js'        , 'src/Underscore/_.include.js' : 'src/Underscore/_.contains.js'        , 'src/Underscore/_.head.js' : 'src/Underscore/_.first.js'        , 'src/Underscore/_.take.js' : 'src/Underscore/_.first.js'        , 'src/Underscore/_.tail.js' : 'src/Underscore/_.rest.js'        , 'src/Underscore/_.drop.js' : 'src/Underscore/_.rest.js'        , 'src/Underscore/_.unique.js' : 'src/Underscore/_.uniq.js'        , 'src/Underscore/_.methods.js' : 'src/Underscore/_.functions.js'        , 'src/Underscore/_.isArguments.js' : 'src/Underscore/_.isTypes.js'        , 'src/Underscore/_.isFunction.js' : 'src/Underscore/_.isTypes.js'        , 'src/Underscore/_.isString.js' : 'src/Underscore/_.isTypes.js'        , 'src/Underscore/_.isNumber.js' : 'src/Underscore/_.isTypes.js'        , 'src/Underscore/_.isDate.js' : 'src/Underscore/_.isTypes.js'        , 'src/Underscore/_.isRegExp.js' : 'src/Underscore/_.isTypes.js'        , 'src/Underscore/_.unescape.js' : 'src/Underscore/_.escape.js'                , 'src/Underscore/_.pop.js' : 'src/Underscore/_._normalMethods.js'        , 'src/Underscore/_.push.js' : 'src/Underscore/_._normalMethods.js'        , 'src/Underscore/_.reverse.js' : 'src/Underscore/_._normalMethods.js'        , 'src/Underscore/_.shift.js' : 'src/Underscore/_._normalMethods.js'        , 'src/Underscore/_.sort.js' : 'src/Underscore/_._normalMethods.js'        , 'src/Underscore/_.splice.js' : 'src/Underscore/_._normalMethods.js'        , 'src/Underscore/_.unshift.js' : 'src/Underscore/_._normalMethods.js'        , 'src/Underscore/_.concat.js' : 'src/Underscore/_._normalMethods.js'        , 'src/Underscore/_.join.js' : 'src/Underscore/_._normalMethods.js'        , 'src/Underscore/_.slice.js' : 'src/Underscore/_._normalMethods.js'    };        if(list[str]){        str = list[str];    }        return str;};var Parser = function(str,path){    this.parseString(str);        this.execString();        this.appendUnderscore(path);        };Parser.prototype.render = function(){    return this.source;};Parser.prototype.execString = function(){    var b = new Function( 'Include','IncludeIf','IncludeJoin','Push','Config',this.str );        this.source =  b(context.Include,context.IncludeIf,context.IncludeJoin,context.Push,context.Config);};Parser.prototype.parseString = function(str){    str = str            .replace(/\\/g,"\\\\")            .replace(/\//g,"\\\/")            .replace(/\"/g,"\\\"")            .replace(/\'/g,"\\\'")            .replace(/\r\n/g,"\\n")            .replace(/\r/g,"\\n")            .replace(/\n/g,"\\n")            .replace(/\<\$/g,"\n<$")            .replace(/\$\>/g,"$>\n")            .split(/\n/g)            ;                        str.forEach(function(v,k){        v.indexOf('<$') == 0 ?            0 :            str[ k ] = "m.push(\"" + v + "\");\n";    });                  str = str            .join('')            .replace(/\<\$\=(.*?)\$\>/gm,function(m,$1){                $1 = $1.replace(/\\/g,"");                return "\nm.push(" + $1 + ");\n";            })            .replace(/\<\$(.*?)\$\>/gm,function(m,$1){                 $1 = $1.replace(/\\/g,"");                return "\n" + $1.replace(/\\/g,'') + "\n";            })            ;                        this.str = str;        this.str =  "\nvar m = [];\n" + this.str + "\nreturn m.join('');";};Parser.prototype.appendUnderscore = function(path){    if(context.Config.Backbone.MainFile == path){        var header = new Parser("<$= Include(\"src/Underscore/underscore.js\") $>\n");                this.source = header.render() + this.source;    }};module.exports = Parser;