/*global Spotlight, Backbone*/

Spotlight.Models = Spotlight.Models || {};

(function () {
    'use strict';

    Spotlight.Models.Table = Backbone.Model.extend({

        url: '',

        initialize: function() {
            this.collection = new Spotlight.Collections.Columns();
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            console.log("Table.parse: %o", arguments);
            return response;
        }
    });

})();
