  <$= Include("src/Underscore/_.isObject.js") $>  <$= Include("src/Underscore/_.extend.js") $>  <$= Include("src/Underscore/_.isArray.js") $>  // Create a (shallow-cloned) duplicate of an object.  _.clone = function(obj) {    if (!_.isObject(obj)) return obj;    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);  };