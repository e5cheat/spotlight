/*global Spotlight, Backbone, JST*/

Spotlight.Views = Spotlight.Views || {};

(function () {
    'use strict';

    Spotlight.Views.EditSchema = Backbone.View.extend({

        template: JST['app/scripts/templates/EditSchema.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click button.save-button' : 'onSave',
            'click button.cancel-button' : 'onCancel',
            'submit #schema-edit-form'  : '_noop'
        },

        model : Spotlight.Models.Schema,

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.empty();
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        onCancel : function(evt){
            this._noop( evt );
            this.remove();
        },

        onSave : function(evt){
            // don't let form try to submit!
            this._noop( evt );

            var dat = this._getFormData();
            this.remove();
            this.model.set( dat );
        },

        _getFormData : function(){
            var newVals = {};
            newVals['name'] = this.$('#schema-name').val();
            newVals['description'] = this.$('#schema-description').val();
            return newVals;
        },

        _noop : function(evt){
            evt.preventDefault();
            evt.stopPropagation();
        }

    });

})();
