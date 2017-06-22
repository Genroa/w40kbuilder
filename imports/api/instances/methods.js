







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
		army.removeUnit(uid);
		army.save();
	},
	
	"add_model_to_unit": function(army_id, uid, reference) {
		let army = Army.findOne({_id: army_id});
		let unit = army.getUnit(uid);

		let model_reference = ModelReference.findOne({name: reference});
		unit.models.push(model_reference.buildDefaultInstance());
		army.save();

		console.log("done");
	},
	
	"delete_model_from_unit": function(army_id, uid, position) {
		let army = Army.findOne({_id: army_id});
		let unit = army.getUnit(uid);

		console.log(army);
		console.log(uid);
		console.log(unit);

		unit.models.splice(position, 1);
		army.save();
	}
});