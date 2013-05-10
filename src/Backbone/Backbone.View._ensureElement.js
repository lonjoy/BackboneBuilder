    <$ Require("src/Backbone/Backbone.View.setElement.js") $>        <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.result.js") $>    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.extend.js") $>    // Ensure that the View has a DOM element to render into.    // If `this.el` is a string, pass it through `$()`, take the first    // matching element, and re-assign it to `el`. Otherwise, create    // an element from the `id`, `className` and `tagName` properties.    _ensureElement: function() {      if (!this.el) {        var attrs = _.extend({}, _.result(this, 'attributes'));        if (this.id) attrs.id = _.result(this, 'id');        if (this.className) attrs['class'] = _.result(this, 'className');        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);        this.setElement($el, false);      } else {        this.setElement(_.result(this, 'el'), false);      }    }