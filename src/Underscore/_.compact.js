    <$= Include("src/Underscore/_.filter.js") $>    <$= Include("src/Underscore/_.identity.js") $>  // Trim out all falsy values from an array.  _.compact = function(array) {    return _.filter(array, _.identity);  };