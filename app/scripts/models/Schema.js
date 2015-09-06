/*global Spotlight, Backbone*/

Spotlight.Models = Spotlight.Models || {};

(function () {
    'use strict';

    Spotlight.Models.Schema = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            console.log("Schema.parse: %o", arguments);
            return response;
        }
    });

})();
