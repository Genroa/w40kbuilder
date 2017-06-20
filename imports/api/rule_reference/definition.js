

import { Class } from "meteor/jagi:astronomy";


import '../stats_modifier_reference/definition.js';



Rule = Class.create({
	name: 'Rule',
	fields: {
		name: String,
		description: String,
		profileModifier: {
			type: StatsModifierContainer,
			default: function() {return new StatsModifierContainer({});}
		}
	},
	helpers: {
		applyModificationToProfile(unit, profile) {
			this.profileModifier.applyModificationToProfile(unit, profile);
		}
	}
});



import './methods.js';