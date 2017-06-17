

import './home.html';


Template.home.onRendered(function(){
	$("select").material_select();
});



Template.home.events({
	'submit #create_army' : function(evt) {
		evt.preventDefault();

		let army_type = $("#army_type").val();
		let army_name = $("#army_name").val();

		Meteor.call("create_army", army_type, army_name, function(err, res) {
			if(!err) {
				console.log("New army created: "+army_name);
				Router.go('edit', {id: res});
			}
		});
	}
});
