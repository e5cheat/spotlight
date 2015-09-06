/*global Spotlight, Backbone*/

Spotlight.Models = Spotlight.Models || {};

(function () {
    'use strict';

    Spotlight.Models.Column = Backbone.Model.extend({

        url: '',



        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            console.log("Column.parse: %o", arguments);
            return response;
        }
    });

})();
