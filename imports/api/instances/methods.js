







Meteor.methods({
	"create_army" : function(type, name) {
		let army = new Army({reference: type, name: name, owner: Meteor.userId()});
		army.save();
		console.log("Created new army");
		return army._id;
	},

	"add_unit_to_army" : function(army_id, reference) {
		let army = Army.findOne({_id: army_id});
		let unit_reference = UnitReference.findOne({name: reference});
		
		army.addUnit(unit_reference.buildDefaultInstance());
		army.save();
	},

	"remove_unit_from_army" : function(army_id, uid) {
		let army = Army.findOne({_id: army_id});
		//console.log("Removing unit "+uid+" "+army_id);
		army.removeUnit(uid);
		army.save();
	}
});