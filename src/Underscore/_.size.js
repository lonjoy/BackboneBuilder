  <$= Include("src/Underscore/_.keys.js") $>  // Return the number of elements in an object.  _.size = function(obj) {    if (obj == null) return 0;    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;  };