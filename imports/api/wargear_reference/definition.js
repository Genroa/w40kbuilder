

import { Class, Union } from "meteor/jagi:astronomy";



StringOrNumber = Union.create({
  name: 'StringOrNumber',
  types: [String, Number]
});

ObjectOrNumber = Union.create({
  name: 'ObjectOrNumber',
  types: [Number, Object]
});


WargearType = Object.freeze({
	EQUIPMENT:"EQUIPMENT",
	WEAPON:"WEAPON"
});




WeaponProfile = Class.create({
	name: 'WeaponProfile',
	fields: {
		profileName: { // for when a wargear has multiple weapon profiles (combi weapons)
			type: String,
			default: function(){ return "";}
		},
		type: String,
		range: Number,
		S: StringOrNumber, // because S can be "User*2" for instance
		AP: Number,
		D: StringOrNumber, // because a number of D can be determined by a dice, "D6",
		ability: { // weapon profile ability
			type: String,
			default: function() {return "";}
		}
	}
});






WargearReference = Class.create({
	name: 'WargearReference',
	collection: new Mongo.Collection('wargear_reference'),
	fields: {
		name: String,
		type: String, // WargearType
		weaponProfiles: {
			type: [WeaponProfile],
			optional: true
		},
		ability: { // weapon information 
			type: String,
			default: function() {return "";}
		},
		profileModifier: {
			type: StatsModifierContainer,
			default: function(){return new StatsModifierContainer({});}
		},
		cost: ObjectOrNumber
	},
	helpers: {
		computeCost(army) {
			return 0; // TODO
		}
	}
});

import './methods.js';