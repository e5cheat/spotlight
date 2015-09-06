/*global Spotlight, Backbone*/

Spotlight.Routers = Spotlight.Routers || {};

(function () {
    'use strict';

    Spotlight.Routers.Spotlight = Backbone.Router.extend({
    	routes : {
    		'' : 'schemas',
    		'schemas' : 'schemas'

    	},
    	index : function(){
    		console.log("index route");
    		$('body').append("<p>Index Route</p>");
    	},
    	schemas : function(){
    		console.log("schemas route");

            var dat = buildDemoSchemas();
            console.log("%o", dat);

            var schemaList = new Spotlight.Collections.Schemas( dat );

            var slistView = new Spotlight.Views.SchemaListView({
                collection : schemaList,
                el : '#schema-list-panel'
            });

            slistView.render();

console.log("schemaColl: %o", schemaList);

    	}
    });

    function buildDemoSchemas(){
        return [
            {
                'name' : 'Project One',
                'description' : 'This is project one.',
                'tables' : [{
                    'name' : 'People',
                    'columns' : [{
                        'name' : 'First Name',
                        'type' : 'varchar'
                    },{
                        'name' : 'Last Name',
                        'type' : 'varchar'
                    }
                    ]
                },
                {
                    'name' : 'Places',
                    'columns' : [{
                        'name' : 'Name',
                        'type' : 'varchar'
                    }, {
                        'name' : 'Description',
                        'type' : 'varchar'
                    }
                    ]
                },
                ]
            },
            {
                'name' : 'Project Two',
                'description' : 'This is project two.',
                'tables' : [{
                    'name' : 'Peeps',
                    'columns' : [{
                        'name' : 'First Name',
                        'type' : 'varchar'
                    },{
                        'name' : 'Last Name',
                        'type' : 'varchar'
                    }
                    ]
                },
                {
                    'name' : 'Theres',
                    'columns' : [{
                        'name' : 'Name',
                        'type' : 'varchar'
                    }, {
                        'name' : 'Description',
                        'type' : 'varchar'
                    }
                    ]
                },
                ]
            }

        ];
    }

})();
