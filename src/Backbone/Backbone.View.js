  // Backbone.View  // -------------  // Backbone Views are almost more convention than they are actual code. A View  // is simply a JavaScript object that represents a logical chunk of UI in the  // DOM. This might be a single item, an entire list, a sidebar or panel, or  // even the surrounding frame which wraps your whole app. Defining a chunk of  // UI as a **View** allows you to define your DOM events declaratively, without  // having to worry about render order ... and makes it easy for the view to  // react to specific changes in the state of your models.  // Creating a Backbone.View creates its initial element outside of the DOM,  // if an existing element is not provided...  var View = Backbone.View = function(options) {    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.uniqueId.js") $>    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.extend.js") $>    this.cid = _.uniqueId('view');    this._configure(options || {});    this._ensureElement();    this.initialize.apply(this, arguments);    this.delegateEvents();  };  // Cached regex to split keys for `delegate`.  var delegateEventSplitter = /^(\S+)\s*(.*)$/;  // List of view options to be merged as properties.  var viewOptions = ['model', <$ if(Config.Backbone.Use.Collection){ $>'collection',<$ } $> 'el', 'id', 'attributes', 'className', 'tagName', 'events'];  // Set up all inheritable **Backbone.View** properties and methods.  _.extend(View.prototype, Events, {        <$= IncludeJoin(",","src/Backbone/Backbone.View.*.js") $>  });