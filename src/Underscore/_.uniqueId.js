  // Generate a unique integer id (unique within the entire client session).  // Useful for temporary DOM ids.  var idCounter = 0;  _.uniqueId = function(prefix) {    var id = ++idCounter + '';    return prefix ? prefix + id : id;  };