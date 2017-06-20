

import '../../../api/unit_reference/definition.js';
import {Rules} from './rules.js';


UnitReference.remove({});


new UnitReference({
	name: "units.space_marines.tactical_squad",
	models: [
		new ModelChoice({
			reference: "models.space_marines.space_marine",
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 4, max: 9}
			}),
			wargearSlots: {},
			wargearProcessors: {}
		}),
		new ModelChoice({
			reference: "models.space_marines.space_marine_sergeant",
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
	name: "units.space_marines.dark_angels.deathwing_terminator_squad",
	models: [
		new ModelChoice({
			reference: "models.space_marines.dark_angels.deathwing_terminator",
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 4, max: 9}
			}),
			wargearSlots: {},
			wargearProcessors: {}
		}),
		new ModelChoice({
			reference: "models.space_marines.dark_angels.deathwing_sergeant",
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 1, max: 1}
			}),
			wargearSlots: {},
			wargearProcessors: {}
		}),
		new ModelChoice({
			reference: "models.space_marines.dark_angels.watcher_in_the_dark",
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