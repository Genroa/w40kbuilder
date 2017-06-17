

import '../../../api/unit_reference/definition.js';



UnitReference.remove({});



new UnitReference({
	name: "Tactical Squad",
	models: [
		new ModelChoice({
			reference: ModelReference.findOne({name: "Space Marine"})._id,
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 4, max: 9}
			}),
			wargearSlots: {},
			wargearProcessors: {}
		}),
		new ModelChoice({
			reference: ModelReference.findOne({name: "Space Marine Sergeant"})._id,
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 1, max: 1}
			}),
			wargearSlots: {},
			wargearProcessors: {}
		})
	],
	powerLevelProcessor: {},
	factionKeywords: ["<Chapter>"],
	keywords: ["Infantry", "Tactical Squad"]
}).save();

new UnitReference({
	name: "Deathwing Terminator Squad",
	models: [
		new ModelChoice({
			reference: ModelReference.findOne({name: "Deathwing Terminator"})._id,
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 4, max: 9}
			}),
			wargearSlots: {},
			wargearProcessors: {}
		}),
		new ModelChoice({
			reference: ModelReference.findOne({name: "Deathwing Sergeant"})._id,
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 1, max: 1}
			}),
			wargearSlots: {},
			wargearProcessors: {}
		})
	],
	powerLevelProcessor: {},
	factionKeywords: ["Dark Angels", "Deathwing"],
	keywords: ["Infantry", "Terminator", "Deathwing Terminator Squad"]
}).save();