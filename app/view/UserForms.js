Ext.define('SB.view.UserForms', {
    extend: 'Ext.form.Panel',
 	 xtype: 'userform',
	 
     requires: [
         'Ext.form.FieldSet',
         'Ext.field.Number',
         'Ext.field.Spinner',
         'Ext.field.Email',
         'Ext.field.Url',
         'Ext.field.TextArea'
     ],
    config: {

        items: [
            {
                xtype: 'fieldset',
                title: 'Registration Form',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'First Name',
                        labelWrap: true,
                        name: 'firstName',
                        placeHolder: 'Enter First Name'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Last Name',
                        labelWrap: true,
                        name: 'lastName',
                        placeHolder: 'Enter last Name'
                    }
                   
                ]
            },
            {
                xtype: 'button',
                itemId: 'save',
                width: '30%',
                text: 'Save'
            }
        ]
    }
});
