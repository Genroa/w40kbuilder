
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
			let cost = ModelReference.findOne({name: this.reference}).pointsCost;
			for(wargearSlot in this.wargear) {
				//cost += ...; //TODO
			}

			return cost;
		},

		computeProfile(unit) {
			let model_reference = ModelReference.findOne({name: this.reference});
			let profile = model_reference.profile.profileCopy();
			
			
			if(model_reference.isReal) {
				// TODO apply rules and wargear modificators
				
				let unit_reference = UnitReference.findOne({name: unit.reference});
				
				for(rule of unit_reference.rules) {
					rule.applyModificationToProfile(unit, profile);
				}
			}

			return profile;
		},
		
		getReference() {
			return ModelReference.findOne({name: this.reference});
		},

		getWargearSlots() {
			return Object.keys(this.wargear);
		},

		getWargear(slotName) {
			return this.wargear[slotName];
		},

		getWargearChoices(unit, slotName) {

			let model_choice = unit.getReference().getModelChoice(this.reference);
			let wargear_config = model_choice.wargearSlots[slotName];
			let wargearChoices = [];


			// Default choice
			wargearChoices.push({
				name: this.getWargear(slotName),
				authorized: true,
				selected: this.wargear[slotName] === wargear_config.default,
				message: ""
			});
			

			// Processors add their choices
			let choices = [];
			
			if(wargear_config.processors) {
				for(processor_container of wargear_config.processors) {
					let processor = WargearProcessor[processor_container.processorFunction];
					
					if(processor) {
						processor.addWargearChoices(this, choices, processor_container.params);
					}
				}
			}
			

			for(choice of choices) {
				wargearChoices.push({
					name: choice,
					authorized: true,
					selected: this.wargear[slotName] === choice,
					message: ""
				});
			}

			// TODO processors filtering

			return wargearChoices;
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
				let model_reference = ModelReference.findOne({name: model.reference});
				let profileName = model_reference.name;

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
		},

		getName() {
			let ref = UnitReference.findOne({name: this.reference});
			return ref && ref.name;
		},

		getRules() {
			let ref = UnitReference.findOne({name: this.reference});
			return ref && ref.rules;
		},
		
		getModels() {
			return this.models;
		},
		
		getReference() {
			return UnitReference.findOne({name: this.reference});
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
		getReferenceName() {
			let ref = ArmyReference.findOne({name: this.reference});
			return ref && ref.name;
		},

		getAuthorizedUnitsForArmy() {
			let ref = ArmyReference.findOne({name: this.reference});
			return ref && ref.getAuthorizedUnitsChoices(this);
		},

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