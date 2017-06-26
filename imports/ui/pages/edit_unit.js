

import { ReactiveVar } from 'meteor/reactive-var';
import './edit_unit.html';



updateSelectors = function() {
	$("select").material_select();
}

updateModelCount = function(instance) {
	let count = {};
	let unit = getArmy(instance).getUnit(instance.unit_uid);
	let models = unit.getModels();
	
	let choices = unit.getReference().getModelChoices();
	for(choice of choices) {
		count[choice.reference] = 0;
	}

	for(model of models) {
		count[model.reference]++;
	}
	instance.count.set(count);
};


getArmy = function(instance) {
	return Army.findOne({_id: instance.army});
};


Template.edit_unit.onCreated(function(){
	this.army = this.data.army;
	this.unit_uid = this.data.unit;
	
	this.count = new ReactiveVar({}, function(c1, c2) {return false;});
	updateModelCount(this);
});


Template.edit_unit.helpers({
	'getUnit': function() {
		let instance = Template.instance();
		let unit = getArmy(instance).getUnit(instance.unit_uid);
		return unit;
	},

	'moreThanMin': function(model) {
		let instance = Template.instance();
		let count = instance.count.get()[model.reference];
		
		let unit = getArmy(instance).getUnit(instance.unit_uid);
		let min = unit.getReference().getModelChoice(model.reference).getMinimumAuthorizedNumber(unit);
		
		return count > min;
	},
	
	'disabledIfMax': function(model_choice) {
		let instance = Template.instance();
		let count = instance.count.get()[model_choice.reference];
		let unit = getArmy(instance).getUnit(instance.unit_uid);

		let max = model_choice.getMaximumAuthorizedNumber(unit);
		
		return count >= max ? "disabled" : "";
	},

	'selectedOrAuthorized': function(wargear_choice) {
		//console.log(wargear_choice);
		if(!wargear_choice.authorized) {
			return 'disabled';
		}
		if(wargear_choice.selected) {
			return 'selected';
		}
		return "";
	},

	'needsSelection': function(wargear_choices) {
		return wargear_choices.length > 1;
	}
});


Template.edit_unit.onRendered(function(){
	updateSelectors();
});


Template.edit_unit.onCreated(function() {
	this.lastEditedField = "";
});



Template.edit_unit.events({
	'click .add_model': function(evt) {
		let instance = Template.instance();
		let counts = instance.count.get();
		counts[evt.target.dataset.reference]++;
		instance.count.set(counts);

		Meteor.call("add_model_to_unit", instance.army, instance.unit_uid, evt.target.dataset.reference, function(err, res) {
			updateSelectors();
		});
	},

	'click .delete_model': function(evt) {
		let instance = Template.instance();

		let counts = instance.count.get();
		let unit = getArmy(instance).getUnit(instance.unit_uid);

		counts[unit.models[evt.target.dataset.position].reference]--;
		instance.count.set(counts);

		Meteor.call("delete_model_from_unit", instance.army, instance.unit_uid, evt.target.dataset.position, function(err, res) {
			
		});
	},

	'change select': function(evt) {
		console.log("A select changed!");
	}
});