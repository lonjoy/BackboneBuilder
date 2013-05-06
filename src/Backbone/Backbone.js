//     Backbone.js 1.0.0//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.//     Backbone may be freely distributed under the MIT license.//     For all details and documentation://     http://backbonejs.org(function(){  // Initial Setup  // -------------  // Save a reference to the global object (`window` in the browser, `exports`  // on the server).  var root = this;  // Save the previous value of the `Backbone` variable, so that it can be  // restored later on, if `noConflict` is used.  var previousBackbone = root.Backbone;  // Create local references to array methods we'll want to use later.  var array = [];  var push = array.push;  var slice = array.slice;  var splice = array.splice;  // The top-level namespace. All public Backbone classes and modules will  // be attached to this. Exported for both the browser and the server.  var Backbone;  if (typeof exports !== 'undefined') {    Backbone = exports;  } else {    Backbone = root.Backbone = {};  }  // Current version of the library. Keep in sync with `package.json`.  Backbone.VERSION = '1.0.0';  // Require Underscore, if we're on the server, and it's not already present.  var _ = root._;  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns  // the `$` variable.  Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable  // to its previous owner. Returns a reference to this Backbone object.  Backbone.noConflict = function() {    root.Backbone = previousBackbone;    return this;  };  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and  // set a `X-Http-Method-Override` header.  Backbone.emulateHTTP = false;  // Turn on `emulateJSON` to support legacy servers that can't deal with direct  // `application/json` requests ... will encode the body as  // `application/x-www-form-urlencoded` instead and will send the model in a  // form param named `model`.  Backbone.emulateJSON = false;   ///Include Library/Backbone/Backbone.Events.js  ///Include Library/Backbone/Backbone.Model.js  ///Include Library/Backbone/Backbone.Collection.js  ///Include Library/Backbone/Backbone.View.js  ///Include Library/Backbone/Backbone.Sync.js  ///Include Library/Backbone/Backbone.Router.js  ///Include Library/Backbone/Backbone.History.js  // Helpers  // -------  // Helper function to correctly set up the prototype chain, for subclasses.  // Similar to `goog.inherits`, but uses a hash of prototype properties and  // class properties to be extended.  var extend = function(protoProps, staticProps) {    var parent = this;    var child;    // The constructor function for the new subclass is either defined by you    // (the "constructor" property in your `extend` definition), or defaulted    // by us to simply call the parent's constructor.    ///PUSH $Header Library/Underscore/_.has.js    if (protoProps && _.has(protoProps, 'constructor')) {      child = protoProps.constructor;    } else {      child = function(){ return parent.apply(this, arguments); };    }    // Add static properties to the constructor function, if supplied.    ///PUSH $Header Library/Underscore/_.extend.js    _.extend(child, parent, staticProps);    // Set the prototype chain to inherit from `parent`, without calling    // `parent`'s constructor function.    var Surrogate = function(){ this.constructor = child; };    Surrogate.prototype = parent.prototype;    child.prototype = new Surrogate;    // Add prototype properties (instance properties) to the subclass,    // if supplied.    if (protoProps) _.extend(child.prototype, protoProps);    // Set a convenience property in case the parent's prototype is needed    // later.    child.__super__ = parent.prototype;    return child;  };  // Set up inheritance for the model, collection, router, view and history.  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;  // Throw an error when a URL is needed, and none is supplied.  var urlError = function() {    throw new Error('A "url" property or function must be specified');  };  // Wrap an optional error callback with a fallback error event.  var wrapError = function (model, options) {    var error = options.error;    options.error = function(resp) {      if (error) error(model, resp, options);      model.trigger('error', model, resp, options);    };  };}).call(this);