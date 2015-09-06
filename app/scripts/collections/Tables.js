/*global Spotlight, Backbone*/

Spotlight.Collections = Spotlight.Collections || {};

(function () {
    'use strict';

    Spotlight.Collections.Tables = Backbone.Collection.extend({

        model: Spotlight.Models.Tables

    });

})();
