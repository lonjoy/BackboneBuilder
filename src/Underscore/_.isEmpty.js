  <$= Include("src/Underscore/_.isArray.js") $>  <$= Include("src/Underscore/_.isString.js") $>  <$= Include("src/Underscore/_.has.js") $>  // Is a given array, string, or object empty?  // An "empty" object has no enumerable own-properties.  _.isEmpty = function(obj) {    if (obj == null) return true;    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;    for (var key in obj) if (_.has(obj, key)) return false;    return true;  };