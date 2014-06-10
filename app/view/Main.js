

Ext.define('SB.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
  	 
	requires: [
		'Ext.TitleBar',
		'Ext.dataview.List',
		'Ext.form.Panel'
	],
  	config: {
  		layout: 'vbox',
		fullscreen: true,
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'AddressBook',
				
				items: [
					{
						xtype: 'button',
						text: 'Contacts',
						listeners:{
							
							tap:function(e)
							{
							var comp = Ext.getCmp('card-layout');
							comp.setActiveItem(0);
							}
						}
						
					},
					{
						xtype: 'button',
						text: 'Add Contact',
						listeners:{
							
							tap:function(e)
							{
							var comp = Ext.getCmp('card-layout');
							comp.setActiveItem(1);
							}
						}
						
					}
				]
			},
           
			{
                style: 'background:#666666',
                flex: 3,
				layout: 'hbox',
				
				items:[
				{
					xtype: 'container',
					style: 'background:#333333',
					flex:1
				},
				{
					flex: 4,
               	 	style: 'background:#aaaaaa',
					
					layout: {type: 'card', animation: {type: 'flip'}},
					
					id: 'card-layout',
					items: [
					{
						
						xtype: 'list',
						store: 'Addressbook',
						grouped: true,
						emptyText: 'This list is empty',
	                	itemTpl: [
   						 	'<p> Name: {firstName} {lastName}</p>',
							'<p>Gender: {Gender}</p>',
							'<p>Phone Number: {PhoneNumber}</p>',
							'<p>Street: {StreetName}</p>',
							'<p>City: {City}</p>',
							'<p>State: {State}</p>',
							'<p>Zip Code: {ZipCode}</p>'
							],
							
		        		onItemDisclosure: function(record,index)
		        		{
		        			alert('Name: ' + record.get('firstName'));
		        		}
				
					},
					{
						layout: 'vbox',
					
						items:[
							{
									flex: 5,
									xtype: 'fieldset',
									id: 'myForm',
									items: [
								
									{
						                xtype: 'textfield',
						                name : 'firstName',
						                label: 'First Name'
						       	  	},	
									{
									   xtype: 'textfield',
									   name : 'lastName',
									   label: 'Last Name'
						       	 	},
									{
										xtype: 'selectfield',
										label: 'Gender',
										options: [
										{text: 'Male', value: 'Male'},
										{text: 'Female', value: 'Female'}
									
										]
					      		  },
								{
									
							  		xtype: 'textfield',
							  		name : 'PhoneNumber',
							   	 	label: 'Phone Number'
									
				       	 		},
								{
										
										
							  		xtype: 'textfield',
							  		name : 'StreetName',
							   	 	label: 'Street Name'
									
									
									
				       	 		},
								{
									
						  		xtype: 'textfield',
						  		name : 'City',
						   	 	label: 'City'
			       	 			},
								{
										
									    xtype: 'selectfield',
									    label: 'State',
									    options: [
									              {text: 'Massachusetts',  value: 'Massachusetts'},
									              {text: 'Connecticut', value: 'Connecticut'},
									              {text: 'New York',  value: 'New York'},
									              {text: 'Vermont',  value: 'Vermont'},
									              {text: 'New Hampshire', value: 'New Hampshire'},
									              {text: 'Maine',  value: 'Maine'},
									   ]
									 
									 
				       	 		},
								{
										
							  		xtype: 'textfield',
							  		name : 'Zipcode',
							   	 	label: 'Zip code'
				       	 		}
									
						            
								]
					    	},
					    	{
										flex: 1,
										xtype: 'button',
										ui: 'Confirm',
						 				text: 'Confirm',
										id:'Submit-Person',
										handler: function(){
												
										var form = Ext.getCmp('myForm');
										console.log(form);
										console.log(form.innerItems[0]._values);
										var person = Ext.create('SB.model.Person', {
										
											firstName: form.innerItems[0]._value,
											lastName: form.innerItems[1]._value,
											Gender: form.innerItems[2]._value.data.value,
											PhoneNumber: form.innerItems[3]._value,
											StreetName: form.innerItems[4]._value,
											City: form.innerItems[5]._value,
											State: form.innerItems[6]._value.data.value,
											ZipCode: form.innerItems[7]._value
										});
										
										
										var addressbook = Ext.getStore('Addressbook');
										addressbook.add(person);
										addressbook.sync();
										var comp = Ext.getCmp('card-layout');
										comp.setActiveItem(0);
											
										}
					   	 	}
							]
					},
					
					]
				
				},
				{
				style: 'background:#333333',
				flex:1
				}
		
				]
			}
			]
  	}
});
