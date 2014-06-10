Ext.define('SB.store.Addressbook',{

	extend: 'Ext.data.Store',
	
	config: {
		model: 'SB.model.Person',
		sorters: 'lastName',

		   grouper: {
		       groupFn: function(record) {
		           return record.get('lastName')[0];
		       }
		   },
		
		proxy: {
			
			type: 'ajax',
            url: 'data/person.json',
			reader: {
						type: 'json',
						rootProperty: 'Addressbook'
			     },
		    writer: {
		    	type: 'json',
				rootProperty: 'Addressbook'
		    }
				 
		},
		
		autoLoad: true
	}
 });