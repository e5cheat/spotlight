/*global Spotlight, Backbone, JST*/

Spotlight.Views = Spotlight.Views || {};

(function () {
    'use strict';

    Spotlight.Views.SchemaListView = Backbone.View.extend({

        template: JST['app/scripts/templates/SchemaListView.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click button' : '_addButton'
        },

        collection : Spotlight.Collections.Schemas,

        initialize: function () {
            this.listenTo(this.collection, 'change', this.render);
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'remove', this.render);
            this.childViews = [];
        },

        /**
         * Cleans out contents before rendering.
         */
        _preRender : function(){

            if( this.childViews.length > 0 ){
                _.each(this.childViews, function(view){
                    view.remove();
                }, this);
            }
            this.$el.empty();
        },

        render: function () {
            // TODO: Use template to bring in the list, headers,
            // and controls, then bring in items here, and attach,
            // not append.
            this._preRender();

            this.$el.html(this.template({}));
console.log("SchemaListView.render: %o", this.collection);
            var $list = this.$('.panel-group');

            this.collection.each( function( model ){

                var cv = new Spotlight.Views.SchemaItemView({
                    'model' : model
                }, this );

                this.childViews.push( cv );

                // var linode = document.createElement('li');
                // linode.appendChild( cv.render().el );

                // $list.append( linode );
                $list.append( cv.render().el );

            }, this );

            return this;
        },

        _addButton : function( evt ){
            var model = new Spotlight.Models.Schema({
                'name' : '',
                'description' : ''
            });

            var newView = new Spotlight.Views.EditSchema({
                model : model,
            });

            $('#schema-edit-panel').html(newView.render().el);

            this.collection.add( model, [{silent:true}] );
        }

    });

})();
