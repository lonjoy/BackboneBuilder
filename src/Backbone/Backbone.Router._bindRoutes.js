    <$ Require("src/Backbone/Backbone.Router.route.js") $>    // Bind all defined routes to `Backbone.history`. We have to reverse the    // order of the routes here to support behavior where the most general    // routes can be defined at the bottom of the route map.    _bindRoutes: function() {      if (!this.routes) return;      this.routes = _.result(this, 'routes');      var route, routes = _.keys(this.routes);      while ((route = routes.pop()) != null) {        this.route(route, this.routes[route]);      }    }