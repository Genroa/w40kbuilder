







Meteor.methods({
	"create_army" : function(type, name) {
		let army = new Army({reference: type, name: name, owner: Meteor.userId()});
		army.save();
		console.log("Created new army");
		return army._id;
	},

	"add_unit_to_army" : function(army_id, unit_reference_id) {
		let army = Army.findOne({_id: army_id});
		let unit_reference = UnitReference.findOne({_id: unit_reference_id});
		
		army.units.push(unit_reference.buildDefaultInstance());
		army.save();
	},

	"remove_unit_from_army" : function(army_id, position) {
		let army = Army.findOne({_id: army_id});
		army.units.splice(position, 1);
		army.save();
	}
});