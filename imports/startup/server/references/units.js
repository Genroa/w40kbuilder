

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
			wargearSlots: {
				"weapon1": {
					default: "wargears.ranged.boltgun",
					processors: [{
						processorFunction: "IfAtLeastXModelsProcessor",
						params: {
							value: 10,
							wargear: [] //TODO
						}
					},
					{
						processorFunction: "UniqueInUnitProcessor",
						params: {
							wargear: [] //TODO
						}
					}]
				},
				"weapon2": {
					default: "wargears.ranged.bolt_pistol"
				},
				"grenade1": {
					default: "wargears.ranged.frag_grenades"
				},
				"grenade2": {
					default: "wargears.ranged.krak_grenades"
				}
			}
		}),
		new ModelChoice({
			reference: "models.space_marines.space_marine_sergeant",
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 1, max: 1}
			}),
			wargearSlots: {
				"weapon1": {
					default: "wargears.ranged.boltgun",
					processors: []
				},
				"weapon2": {
					default: "wargears.ranged.bolt_pistol"
				},
				"grenade1": {
					default: "wargears.ranged.frag_grenades"
				},
				"grenade2": {
					default: "wargears.ranged.krak_grenades"
				}
			}
		})
	],
	type: UnitType.TROOPS,
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
			wargearSlots: {
				"weapon1": {
					default: "wargears.melee.power_fist",
					processors: [
						{
							processorFunction: "SimpleWargearChoice",
							params: {
								weapon: "wargears.melee.chainfist"
							}
						}
					]
				},
				"weapon2": {
					default: "wargears.ranged.storm_bolter",
					processors: []
				}
			}
		}),
		new ModelChoice({
			reference: "models.space_marines.dark_angels.deathwing_sergeant",
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 1, max: 1}
			}),
			wargearSlots: {
				"weapon1": {
					default: "wargears.melee.power_sword",
					processors: []
				},
				"weapon2": {
					default: "wargears.ranged.storm_bolter",
					processors: []
				}
			}
		}),
		new ModelChoice({
			reference: "models.space_marines.dark_angels.watcher_in_the_dark",
			modelNumberProcessor: new ModelNumberProcessorContainer({
				boundsCheckFunction: "SimpleBoundedNumberProcessor",
				params: {min: 0, max: 1}
			}),
			wargearSlots: {}
		})
	],
	rules: [
		Rules["Storm Shield"],
		Rules["Teleport Strike"],
		Rules["Terminator Armour"],
		Rules["Unforgiven"],
		Rules["Watcher in the Dark"]
	],
	type: UnitType.ELITES,
	powerLevelProcessor: {},
	factionKeywords: ["Dark Angels", "Deathwing"],
	keywords: ["Infantry", "Terminator", "Deathwing Terminator Squad"]
}).save();