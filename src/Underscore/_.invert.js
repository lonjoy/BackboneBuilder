  <$= Include("src/Underscore/_.has.js") $>  // Invert the keys and values of an object. The values must be serializable.  _.invert = function(obj) {    var result = {};    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;    return result;  };