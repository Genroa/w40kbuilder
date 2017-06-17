


import './edit.html';



Template.edit.onCreated(function(){
	this.army = this.data.army;
});



Template.edit.events({
	'click .add_unit' : function(evt) {
		Meteor.call("add_unit_to_army", this.army._id, evt.target.dataset.reference_id, function(err, res) {

		});
	},

	'click .delete_unit' : function(evt) {
		Meteor.call("remove_unit_from_army", this.army._id, evt.target.dataset.position, function(err, res) {
			
		});
	}
});