

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

		computeProfile() {
			let model_reference = ModelReference.findOne({_id: model.reference});

			// TODO apply rules and wargear modificators

			return model_reference.profile.profileCopy();
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
			console.log(this.computeCompactedProfiles());
			return cost;
		},

		computeCompactedProfiles() {
			let profiles = {};

			for(model of this.models) {
				let model_reference = ModelReference.findOne({_id: model.reference});
				let profileName = model_reference.name;
				for(wargearSlot in model.wargear) {
					profileName += " + "+model.wargear[wargearSlot]; // TODO FIX different choice order
				}

				if(!profiles[profileName]) {
					profiles[profileName] = {
						name: profileName,
						profile: model.computeProfile(),
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