Ext.define("SB.model.Person", {
	
	extend: 'Ext.data.Model',
	
	config: {
		
		
		
		fields: [
			{name: 'firstName', type: 'string'},
			{name: 'lastName', type: 'string'},
			{name: 'Gender', type: 'string'},
			{name: 'PhoneNumber', type: 'string'},
			{name: 'StreetName', type: 'string'},
			{name: 'City', type: 'string'},
			{name: 'State', type: 'string'},
			{name: 'ZipCode', type: 'string'}

		],
		
		validations: [
			{type: 'presence', field: 'firstName'},
			{type: 'presence', field: 'lastName'},
			{type: 'inclusion', field: 'Gender', list: ['Male', 'Female']}
		
		]
		
	}
	
});