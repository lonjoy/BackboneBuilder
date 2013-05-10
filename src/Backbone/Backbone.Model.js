  // Backbone.Model  // --------------  // Backbone **Models** are the basic data object in the framework --  // frequently representing a row in a table in a database on your server.  // A discrete chunk of data and a bunch of useful, related methods for  // performing computations and transformations on that data.  // Create a new model with the specified attributes. A client id (`cid`)  // is automatically generated and assigned for you.  var Model = Backbone.Model = function(attributes, options) {    var defaults;    var attrs = attributes || {};    options || (options = {});    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.uniqueId.js") $>    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.extend.js") $>    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.pick.js") $>    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.result.js") $>    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.defaults.js") $>    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.each.js") $>    this.cid = _.uniqueId('c');    this.attributes = {};    _.extend(this, _.pick(options, modelOptions));    if (options.parse) attrs = this.parse(attrs, options) || {};    if (defaults = _.result(this, 'defaults')) {      attrs = _.defaults({}, attrs, defaults);    }    this.set(attrs, options);    this.changed = {};    this.initialize.apply(this, arguments);  };  // A list of options to be attached directly to the model, if provided.  var modelOptions = ['url', 'urlRoot'<$ if(Config.Backbone.Use.Collection){ $>, 'collection'<$ } $>];  // Attach all inheritable methods to the Model prototype.  _.extend(Model.prototype, Events, {    <$= IncludeJoin(",","src/Backbone/Backbone.Model.*.js") $>  });  // Underscore methods that we want to implement on the Model.  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];  // Mix in each Underscore method as a proxy to `Model#attributes`.  _.each(modelMethods, function(method) {    Model.prototype[method] = function() {      var args = slice.call(arguments);      args.unshift(this.attributes);      return _[method].apply(_, args);    };  });