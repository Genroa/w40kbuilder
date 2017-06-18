

import { Class } from "meteor/jagi:astronomy";


Model = Class.create({
	name: 'Model',
	fields: {
		reference: String,
		woundsLeft: Number,
		wargear: Object
	},
	helpers: {
		computeCost() {
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
		models: [Model]
	},
	helpers: {
		computeCost() {
			let cost = 0;
			for(model of this.models) {
				cost += model.computeCost();
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



Army = Class.create({
	name: 'Army',
	collection: new Mongo.Collection('army'),
	fields: {
		name: String,
		owner: String,
		reference: String,
		units: {
			type: [Unit],
			default: function() { return []; }
		}
	},
	helpers: {
		computeCost() {
			let cost = 0;
			for(unit of this.units) {
				cost += unit.computeCost();
			}
			return cost;
		}
	}
});

import './methods.js';