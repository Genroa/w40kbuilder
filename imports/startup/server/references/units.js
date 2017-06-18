

import '../../../api/unit_reference/definition.js';
import {Rules} from './rules.js';


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
	rules: [],
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
		}),
		new ModelChoice({
			reference: ModelReference.findOne({name: "Watcher in the Dark"})._id,
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 1, max: 1}
			}),
			wargearSlots: {},
			wargearProcessors: {}
		})
	],
	rules: [
		Rules["Storm Shield"],
		Rules["Teleport Strike"],
		Rules["Terminator Armour"],
		Rules["Unforgiven"],
		Rules["Watcher in the Dark"]
	],
	powerLevelProcessor: {},
	factionKeywords: ["Dark Angels", "Deathwing"],
	keywords: ["Infantry", "Terminator", "Deathwing Terminator Squad"]
}).save();