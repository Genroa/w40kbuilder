
const uuidv4 = require('uuid/v4');
import { Class, Type } from "meteor/jagi:astronomy";

const KEY = 0;
const VALUE = 1;

Model = Class.create({
	name: 'Model',
	fields: {
		reference: String,
		woundsLeft: Number,
		wargear: Object
	},
	helpers: {
		computeCost(army) {
			let cost = ModelReference.findOne({_id: this.reference}).pointsCost;
			for(wargearSlot in this.wargear) {
				//cost += ...; //TODO
			}

			return cost;
		},

		computeProfile(unit) {
			let model_reference = ModelReference.findOne({_id: model.reference});
			let profile = model_reference.profile.profileCopy();
			// TODO apply rules and wargear modificators

			let unit_reference = UnitReference.findOne({_id: unit.reference});
			
			for(rule of unit_reference.rules) {
				rule.applyModificationToProfile(unit, profile);
			}


			return profile;
		}
	}
});




Unit = Class.create({
	name: 'Unit',
	fields: {
		pseudo: String,
		reference: String,
		_uid: {
			type: String,
			default: function(){return '';}
		},
		models: [Model]
	},
	helpers: {
		computeCost(army) {
			let cost = 0;
			for(model of this.models) {
				cost += model.computeCost(army);
			}
			//console.log(this.computeCompactedProfiles());
			return cost;
		},

		computeCompactedProfiles() {
			let profiles = {};

			for(model of this.models) {
				let model_reference = ModelReference.findOne({_id: model.reference});
				let profileName = model_reference.name + " (";
				for(wargearSlot in model.wargear) {
					profileName += model.wargear[wargearSlot]+", "; // TODO FIX different choice order
				}

				profileName = profileName.slice(0, -2) + ")";

				if(!profiles[profileName]) {
					profiles[profileName] = {
						name: profileName,
						profile: model.computeProfile(this),
						number: 1
					};
				} else {
					profiles[profileName].number++;
				}
			}

			return Object.values(profiles);
		}
	}
});



Type.create({
	name: 'Map',
	class: Map,
	cast(value) {
		console.log(value);
		return value;
	},

	
	validate(args) {
		console.log("Args:");
		console.log(args);
		return true;
	}
});


Army = Class.create({
	name: 'Army',
	collection: new Mongo.Collection('army'),
	fields: {
		name: String,
		owner: String,
		reference: String,
		units: {
			type: Object,
			default: function(){return {};}
		}
	},
	helpers: {
		computeCost() {
			let cost = 0;
			for(let elem of this.getUnits()) {
				cost += elem.computeCost(this);
			}
			return cost;
		},
		
		getUnits() {
			return Object.values(this.units);
		},
		
		getUnitsUIDs() {
			return Object.keys(this.units);
		},
		
		getUnit(uid) {
			return this.units[uid];
		},
		
		addUnit(unit) {
			let uid = uuidv4();
			
			unit._uid = uid;
			this.units[uid] = unit;
		},
		
		removeUnit(uid) {
			delete this.units[uid];
		}
	}
});

import './methods.js';