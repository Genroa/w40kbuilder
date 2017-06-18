


import './edit.html';



Template.edit.onRendered(function(){
	//$('#unit_anchor_tutorial').tapTarget('open');
	$('.tooltipped').tooltip({});
});





Template.edit.helpers({
	'isModified' : function(profile, stat) {
		return profile.modified[stat] ? "stat_modified" : "";
	}
});




Template.edit.onCreated(function(){
	this.army = this.data.army;
});



Template.edit.events({
	'click .add_unit' : function(evt) {
		Meteor.call("add_unit_to_army", this.army._id, evt.target.dataset.reference_id, function(err, res) {

			$('.tooltipped').tooltip({});
		});
	},

	'click .delete_unit' : function(evt) {
		Meteor.call("remove_unit_from_army", this.army._id, evt.target.dataset.position, function(err, res) {
			
		});
	}
});