  // Backbone.Events  // ---------------  // A module that can be mixed in to *any object* in order to provide it with  // custom events. You may bind with `on` or remove with `off` callback  // functions to an event; `trigger`-ing an event fires all callbacks in  // succession.  //  //     var object = {};  //     _.extend(object, Backbone.Events);  //     object.on('expand', function(){ alert('expanded'); });  //     object.trigger('expand');  //  var Events = Backbone.Events = {    <$= IncludeJoin(",","src/Backbone/Backbone.Events.*.js") $>  };  // Regular expression used to split event strings.  var eventSplitter = /\s+/;  // Implement fancy features of the Events API such as multiple event  // names `"change blur"` and jQuery-style event maps `{change: action}`  // in terms of the existing API.  var eventsApi = function(obj, action, name, rest) {    if (!name) return true;    // Handle event maps.    if (typeof name === 'object') {      for (var key in name) {        obj[action].apply(obj, [key, name[key]].concat(rest));      }      return false;    }    // Handle space separated event names.    if (eventSplitter.test(name)) {      var names = name.split(eventSplitter);      for (var i = 0, l = names.length; i < l; i++) {        obj[action].apply(obj, [names[i]].concat(rest));      }      return false;    }    return true;  };  // A difficult-to-believe, but optimized internal dispatch function for  // triggering events. Tries to keep the usual cases speedy (most internal  // Backbone events have 3 arguments).  var triggerEvents = function(events, args) {    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];    switch (args.length) {      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);    }  };  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};  // Inversion-of-control versions of `on` and `once`. Tell *this* object to  // listen to an event in another object ... keeping track of what it's  // listening to.  _.each(listenMethods, function(implementation, method) {    Events[method] = function(obj, name, callback) {      var listeners = this._listeners || (this._listeners = {});      var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));      listeners[id] = obj;      if (typeof name === 'object') callback = this;      obj[implementation](name, callback, this);      return this;    };  });  // Aliases for backwards compatibility.  Events.bind   = Events.on;  Events.unbind = Events.off;  // Allow the `Backbone` object to serve as a global event bus, for folks who  // want global "pubsub" in a convenient place.  _.extend(Backbone, Events);