/*global Spotlight, Backbone, JST*/

Spotlight.Views = Spotlight.Views || {};

(function () {
    'use strict';

    Spotlight.Views.TableDataView = Backbone.View.extend({

        template: JST['app/scripts/templates/TableDataView.hbs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        getDataURL : function(){
            return 'spotlightdb/schema'+this.model.get('schema')+"/"+this.model.get('name');
        },

        render: function () {
            var that = this;
            this.$el.html(this.template(this.model.toJSON()));
            console.log("TableDataView.render ==> getDataURL "+this.getDataURL());

            $.ajax({
               method : 'GET',
               url : that.getDataURL(),
               contentType : 'application/json'
            }).always( function(resp){
               console.log(resp);
               var container = that.$el.find('div.data-table');

               if( window.dataTable ){
                   window.dataTable.destroy();
               }

               window.dataTable = new Handsontable( container, {
                   /*rowHeaders  : true, */
                   colHeaders  : resp.colHeaders,
                   columns     : resp.columns,
                   contextMenu : true,
                   data        : resp.data,
                   stretchH    : 'all',
                   columnSorting: true,
                   afterChange: function(changes, source) {
                       if( changes != null ){
                           var ar = arguments[0][0],
                               changeColumnIndex = ar[1],
                               oldValue = ar[2],
                               newValue = ar[3];
                           // Assuming just one column/row of change.
                           var changedRow = resp.data[changes[0][0]];

                           console.log("PK: "+changedRow[0]+" column "+changeColumnIndex+" changed from "+oldValue+" to "+newValue);

                       }
                   }

               });

            });
        }

    });

})();
