/*global Spotlight, Backbone, JST*/

Spotlight.Views = Spotlight.Views || {};

(function () {
    'use strict';

    Spotlight.Views.TableItemView = Backbone.View.extend({

        template: JST['app/scripts/templates/TableItemView.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click em[data-action="edit"]' : 'onEdit',
            'click em[data-action="data"]' : 'onData'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        onEdit : function( evt ){
            evt.preventDefault();
            evt.stopPropagation();
            console.log("onEdit");
        },

        onData : function( evt ){
            console.log("onData");
        }

    });

})();
