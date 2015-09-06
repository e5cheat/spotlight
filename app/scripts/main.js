/*global Spotlight, $*/


window.Spotlight = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var mainRouter = new Spotlight.Routers.Spotlight();

        Backbone.history.start({pushState: true});
    }
};

$(document).ready(function () {
    'use strict';
    Spotlight.init();
});
