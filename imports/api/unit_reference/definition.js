

import { Class, Enum } from "meteor/jagi:astronomy";
import '../rule_reference/definition.js';




_ModelNumberProcessor = class {
	getMinimumAuthorizedNumber(unit, params) {
		return 0;
	}
	getMaximumAuthorizedNumber(unit, params) {
		return 0;
	}
}

class SimpleBoundedNumberProcessor extends _ModelNumberProcessor {
	getMinimumAuthorizedNumber(unit, params) {
		return params.min;
	}
	getMaximumAuthorizedNumber(unit, params) {
		return params.max;
	}
}

ModelNumberProcessor = {
	"SimpleBoundedNumberProcessor": new SimpleBoundedNumberProcessor()
};


ModelNumberProcessorContainer = Class.create({
	name: 'ModelNumberProcessorContainer',
	fields: {
		boundsCheckFunction: String,
		params: Object
	},
	helpers: {
		getMinimumAuthorizedNumber(unit) {
			return ModelNumberProcessor[this.boundsCheckFunction].getMinimumAuthorizedNumber(unit, this.params);
		},
		getMaximumAuthorizedNumber(unit) {
			return ModelNumberProcessor[this.boundsCheckFunction].getMaximumAuthorizedNumber(unit, this.params);
		}
	}
});





ModelChoice = Class.create({
	name: 'ModelChoice',
	fields: {
		reference: String,
		modelNumberProcessor: ModelNumberProcessorContainer,
		wargearSlots: Object,
		wargearProcessors: Object
	}, 
	helpers: {
		getMinimumAuthorizedNumber(unit) {
			return this.modelNumberProcessor.getMinimumAuthorizedNumber(unit);
		},
		
		getMaximumAuthorizedNumber(unit) {
			return this.modelNumberProcessor.getMaximumAuthorizedNumber(unit);
		}
	}
});



UnitType = Enum.create({
	name: 'UnitType',
	identifiers: ['HQ', 'TROOPS', 'ELITES', 'FAST_ATTACK', 'HEAVY_SUPPORT', 'DEDICATED_TRANSPORT', 'FLYER', 'FORTIFICATION', 'LORD_OF_WAR']
});




UnitReference = Class.create({
	name: 'UnitReference',
	collection: new Mongo.Collection('unit_reference'),
	fields: {
		name: String,
		models: [ModelChoice],
		type: UnitType,
		powerLevelProcessor: Object,
		rules: [Rule],
		keywords: [String],
		factionKeywords: [String]
	},
	helpers: {
		buildDefaultInstance() {
			let unit = new Unit({
				pseudo: this.name,
				reference: this.name,
				models: []
			});


			for(model_choice of this.models) {
				let min = model_choice.modelNumberProcessor.getMinimumAuthorizedNumber(unit);
				let model_reference = ModelReference.findOne({name: model_choice.reference});
				for(let i=0; i<min; i++) {
					unit.models.push(model_reference.buildDefaultInstance());
				}
			}

			return unit;
		},
		
		getModelChoices() {
			return this.models;
		},
		
		getModelChoice(ref) {
			for(choice of this.models) {
				if(ref == choice.reference) return choice;
			}
		}
	}
});

import './methods.js';