Ext.define('SB.controller.Addressbook', {
	
	extend: 'Ext.app.Controller',
	
	requires:[
		'Ext.MessageBox'
	],
	
	config: {
		
		
		models: ['Person'],
		stores: ['Addressbook'],
		
        refs: {
            AddressList: 'list',
           
        },
        control: {
            AddressList: {
                itemdoubletap: 'onItemDoubleTap',
			
            },
           
              
           
        }
    },

    onItemDoubleTap: function(self, index, target, record, e)
    {
		Ext.Msg.confirm("Confirmation", "Are you sure you would like to delete this person?", function() {
		
	        var AddressStore = Ext.getStore('Addressbook');
			AddressStore.remove(record);
			AddressStore.sync();
		});
		
 
    }

   

    
});
