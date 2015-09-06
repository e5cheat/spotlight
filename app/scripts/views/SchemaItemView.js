/*global Spotlight, Backbone, JST*/

Spotlight.Views = Spotlight.Views || {};

(function () {
    'use strict';

    Spotlight.Views.SchemaItemView = Backbone.View.extend({

        template: JST['app/scripts/templates/SchemaItemView.hbs'],

        tagName: 'div',

        id: '',

        className: 'panel panel-default',

        events: {
            'click span.glyphicon-edit' : 'onEdit'
        },

        model : Spotlight.Models.Schema,

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
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

        _getModelData : function(){
            return  _.extend(this.model.toJSON(), {'cid' : this.model.cid} );
        },

        render: function () {
            // Need a TableItemView, which encompasses a Columns view?
            // or just a list of tables -- I think this is right here.
            // We keep the columns for table structure editing, but no
            // to display in this context.
            // So a SchemaItemView is collapsible which is actually a
            // composite view. The collapsible contains the tables, which
            // may also contain control links for edit, or display.
console.log("SchemaItemView.render: %o", this._getModelData() );
            this._preRender();

            var data = this._getModelData();
            this.$el.html(this.template( data ));

            var $list = this.$('.schema-item');

            _.each(this.model.get('tables'), function( model ){

                var cv = new Spotlight.Views.TableItemView({
                    'model' : new Spotlight.Models.Table( model )
                }, this );

                this.childViews.push( cv );

                // var linode = document.createElement('li');
                // linode.appendChild( cv.render().el );

                // $list.append( linode );
                $list.append( cv.render().el );

            }, this );




            return this;
        },

        onEdit : function(){
            // Toggle, if already present.
            if( this.editView ){
                this.editView.remove();
                delete this.editView;
                return;
            }

            this.editView = new Spotlight.Views.EditSchema({
                model : this.model
            });

            $('#schema-edit-panel').append(this.editView.render().el);
        }

    });

})();
