

import { Class } from "meteor/jagi:astronomy";




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
	}
});



UnitReference = Class.create({
	name: 'UnitReference',
	collection: new Mongo.Collection('unit_reference'),
	fields: {
		name: String,
		models: [ModelChoice],
		powerLevelProcessor: Object,
		keywords: [String],
		factionKeywords: [String]
	},
	helpers: {
		buildDefaultInstance() {
			let unit = new Unit({
				pseudo: this.name,
				reference: this._id,
				models: []
			});


			for(model_choice of this.models) {
				let min = model_choice.modelNumberProcessor.getMinimumAuthorizedNumber(unit);
				let model_reference = ModelReference.findOne({_id: model_choice.reference});
				for(let i=0; i<min; i++) {
					unit.models.push(model_reference.buildDefaultInstance());
				}
			}

			return unit;
		}
	}
});

import './methods.js';