import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

Template.registerHelper("setTitle", function(){
	let title = "";
	for (var i = 0; i < arguments.length-1; i++) {
		title+=arguments[i];
	}

	if(title !== ""){
		document.title = title;
	}
	else{
		console.log("setTitle called without title!");
	}
});


Template.registerHelper("getInfoMessage", function() {
	return Session.get("infoMessage");
});

Template.registerHelper("print", function(obj) {
	console.log(obj);
});







Template.registerHelper("formatSvg", function(value) {
	return value > 0 ? value+"+" : "NA";
});

Template.registerHelper("getArmyReferences", function() {
	return ArmyReference.find({}, {sort: {name: 1}});
});

Template.registerHelper("getUserArmies", function() {
	return Meteor.userId() && Army.find({owner: Meteor.userId()});
});

Template.registerHelper("getArmyReferenceName", function(id) {
	let ref = ArmyReference.findOne({_id: id});
	return ref && ref.name;
});

Template.registerHelper("getUnitReferenceName", function(id) {
	let ref = UnitReference.findOne({_id: id});
	return ref && ref.name;
});


Template.registerHelper("getAuthorizedUnitsForArmy", function(army) {
	let ref = ArmyReference.findOne({_id: army.reference});
	return ref && ref.getAuthorizedUnitsChoices(army);
});
