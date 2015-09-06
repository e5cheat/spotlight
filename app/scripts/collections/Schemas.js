/*global Spotlight, Backbone*/

Spotlight.Collections = Spotlight.Collections || {};

(function () {
    'use strict';

    Spotlight.Collections.Schemas = Backbone.Collection.extend({

        model: Spotlight.Models.Schema,

        parse : function(response){
            var col = [];
            if( _.isArray( response ) ){
                _.each( response, function( item ){
                    var schema = new Spotlight.Models.Schema({
                        'name' : item.name
                    });

                    var tabs = new Backbone.Collection();
                    schema.set("tables", tabs);

                    _.each( item.tables, function( tab ){

                        var table = new Spotlight.Models.Table({
                            'name' : tab.name,
                            'description' : tab.description
                        });

                        var cols = new Backbone.Collection();
                        table.set("columns", cols);

                        _.each( tab.columns, function( col ){
                            cols.add( new Spotlight.Models.Column( col ) );
                        });

                        tabs.add( table );

                    });

                    col.push( schema );
                });
                return col;
            }
            return response.results;
        },

        initialize : function(){
            if( _.isArray( arguments[0] ) ){
                this.models = this.parse( arguments[0] );
                console.log("Schemas.initialize: %o", this);
                // each is a Schema model, each schema model may
                // contain Tables, and Tables may contain columns.
                // How to build the appropriate models and collections?

            }
        }

    });

})();
