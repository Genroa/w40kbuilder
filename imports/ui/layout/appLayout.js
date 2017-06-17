

import './appLayout.html';


Template.appLayout.helpers({
	
});

Template.appLayout.events({
	'click #disconnect_button': function(evt) {
		Meteor.logout();
	}
});