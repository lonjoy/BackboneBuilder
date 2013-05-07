// Underscore.js 1.4.4
// ===================

// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.

// Baseline setup
// --------------
(function() {

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.4.4';

  // Collection Functions
  // --------------------
    
    <$ if("src/Underscore/_.each.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.each.js") $>
    <$ } $>
    
    <$ if("src/Underscore/_.map.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.map.js") $>
    <$ } $>
    

  

  var reduceError = 'Reduce of empty array with no initial value';
    <$ if("src/Underscore/_.reduce.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.reduce.js") $>
    <$ } $>
    <$ if("src/Underscore/_.reduceRight.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.reduceRight.js") $>
    <$ } $>
    <$ if("src/Underscore/_.find.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.find.js") $>
    <$ } $>
    <$ if("src/Underscore/_.filter.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.filter.js") $>
    <$ } $>
    <$ if("src/Underscore/_.reject.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.reject.js") $>
    <$ } $>
    <$ if("src/Underscore/_.every.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.every.js") $>
    <$ } $>
    <$ if("src/Underscore/_.any.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.any.js") $>
    <$ } $>
    <$ if("src/Underscore/_.contains.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.contains.js") $>
    <$ } $>
    <$ if("src/Underscore/_.invoke.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.invoke.js") $>
    <$ } $>
    <$ if("src/Underscore/_.pluck.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.pluck.js") $>
    <$ } $>
    <$ if("src/Underscore/_.where.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.where.js") $>
    <$ } $>
    <$ if("src/Underscore/_.findWhere.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.findWhere.js") $>
    <$ } $>
    <$ if("src/Underscore/_.max.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.max.js") $>
    <$ } $>
    <$ if("src/Underscore/_.min.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.min.js") $>
    <$ } $>
    <$ if("src/Underscore/_.shuffle.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.shuffle.js") $>
    <$ } $>
    <$ if("src/Underscore/_.sortBy.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.sortBy.js") $>
    <$ } $>
    <$ if("src/Underscore/_.groupBy.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.groupBy.js") $>
    <$ } $>
    <$ if("src/Underscore/_.countBy.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.countBy.js") $>
    <$ } $>
    <$ if("src/Underscore/_.sortedIndex.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.sortedIndex.js") $>
    <$ } $>
    <$ if("src/Underscore/_.toArray.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.toArray.js") $>
    <$ } $>
    <$ if("src/Underscore/_.size.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.size.js") $>
    <$ } $>
    

  // Array Functions
  // ---------------
    <$ if("src/Underscore/_.first.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.first.js") $>
    <$ } $>
    <$ if("src/Underscore/_.initial.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.initial.js") $>
    <$ } $>
    <$ if("src/Underscore/_.last.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.last.js") $>
    <$ } $>
    <$ if("src/Underscore/_.rest.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.rest.js") $>
    <$ } $>
    <$ if("src/Underscore/_.compact.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.compact.js") $>
    <$ } $>
    <$ if("src/Underscore/_.flatten.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.flatten.js") $>
    <$ } $>
    <$ if("src/Underscore/_.without.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.without.js") $>
    <$ } $>
    <$ if("src/Underscore/_.uniq.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.uniq.js") $>
    <$ } $>
    <$ if("src/Underscore/_.union.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.union.js") $>
    <$ } $>
    <$ if("src/Underscore/_.intersection.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.intersection.js") $>
    <$ } $>
    <$ if("src/Underscore/_.difference.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.difference.js") $>
    <$ } $>
    <$ if("src/Underscore/_.zip.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.zip.js") $>
    <$ } $>
    <$ if("src/Underscore/_.object.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.object.js") $>
    <$ } $>
    <$ if("src/Underscore/_.indexOf.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.indexOf.js") $>
    <$ } $>
    <$ if("src/Underscore/_.lastIndexOf.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.lastIndexOf.js") $>
    <$ } $>
    <$ if("src/Underscore/_.range.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.range.js") $>
    <$ } $>
    

  // Function (ahem) Functions
      // ------------------
    <$ if("src/Underscore/_.bind.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.bind.js") $>
    <$ } $>
    <$ if("src/Underscore/_.partial.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.partial.js") $>
    <$ } $>
    <$ if("src/Underscore/_.bindAll.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.bindAll.js") $>
    <$ } $>
    <$ if("src/Underscore/_.memoize.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.memoize.js") $>
    <$ } $>
    <$ if("src/Underscore/_.delay.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.delay.js") $>
    <$ } $>
    <$ if("src/Underscore/_.defer.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.defer.js") $>
    <$ } $>
    <$ if("src/Underscore/_.throttle.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.throttle.js") $>
    <$ } $>
    <$ if("src/Underscore/_.debounce.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.debounce.js") $>
    <$ } $>
    <$ if("src/Underscore/_.once.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.once.js") $>
    <$ } $>
    <$ if("src/Underscore/_.wrap.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.wrap.js") $>
    <$ } $>
    <$ if("src/Underscore/_.compose.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.compose.js") $>
    <$ } $>
    <$ if("src/Underscore/_.after.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.after.js") $>
    <$ } $> 

  // Object Functions
  // ----------------
    <$ if("src/Underscore/_.keys.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.keys.js") $>
    <$ } $>
    <$ if("src/Underscore/_.values.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.values.js") $>
    <$ } $>
    <$ if("src/Underscore/_.pairs.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.pairs.js") $>
    <$ } $>
    <$ if("src/Underscore/_.invert.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.invert.js") $>
    <$ } $>
    <$ if("src/Underscore/_.functions.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.functions.js") $>
    <$ } $>
    <$ if("src/Underscore/_.extend.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.extend.js") $>
    <$ } $>
    <$ if("src/Underscore/_.pick.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.pick.js") $>
    <$ } $>
    <$ if("src/Underscore/_.omit.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.omit.js") $>
    <$ } $>
    <$ if("src/Underscore/_.defaults.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.defaults.js") $>
    <$ } $>
    <$ if("src/Underscore/_.clone.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.clone.js") $>
    <$ } $>
    <$ if("src/Underscore/_.tap.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.tap.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isEqual.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isEqual.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isEmpty.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isEmpty.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isElement.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isElement.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isArray.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isArray.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isObject.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isObject.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isTypes.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isTypes.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isFinite.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isFinite.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isNaN.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isNaN.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isBoolean.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isBoolean.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isNull.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isNull.js") $>
    <$ } $>
    <$ if("src/Underscore/_.isUndefined.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.isUndefined.js") $>
    <$ } $>
    <$ if("src/Underscore/_.has.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.has.js") $>
    <$ } $>
    

  

  

  // Utility Functions
  // -----------------
    
  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };
    <$ if("src/Underscore/_.identity.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.identity.js") $>
    <$ } $>
    <$ if("src/Underscore/_.times.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.times.js") $>
    <$ } $>
    <$ if("src/Underscore/_.random.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.random.js") $>
    <$ } $>
    <$ if("src/Underscore/_.escape.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.escape.js") $>
    <$ } $>
    <$ if("src/Underscore/_.result.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.result.js") $>
    <$ } $>
    
        <$= Include("src/Underscore/_.mixin.js") $>
   
    <$ if("src/Underscore/_.uniqueId.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.uniqueId.js") $>
    <$ } $>
    <$ if("src/Underscore/_.template.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.template.js") $>
    <$ } $>
    <$ if("src/Underscore/_.chain.js" in Config.Backbone.Underscore.Require){ $>
        <$= Include("src/Underscore/_.chain.js") $>
    <$ } $>
  



  

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);
