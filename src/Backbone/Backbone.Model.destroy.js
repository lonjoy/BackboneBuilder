    // If `wait: true` is passed, waits for the server to respond before removal.    destroy: function(options) {      options = options ? _.clone(options) : {};      var model = this;      var success = options.success;      var destroy = function() {        model.trigger('destroy', model, <$ if(Config.Backbone.Use.Collection){ $>model.collection<$ }else{ $> [] <$ } $>, options);      };      options.success = function(resp) {        if (options.wait || model.isNew()) destroy();        if (success) success(model, resp, options);        if (!model.isNew()) model.trigger('sync', model, resp, options);      };      if (this.isNew()) {        options.success();        return false;      }      wrapError(this, options);      var xhr = this.sync('delete', this, options);      if (!options.wait) destroy();      return xhr;    }