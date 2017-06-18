

import { Class } from "meteor/jagi:astronomy";




RuleModifier = class {
	applyModificationToProfile(params, unit, profile) {

	}
}

InvSvgModifier = class extends RuleModifier {
	applyModificationToProfile(params, unit, profile) {
		profile.InvSvg = params.value;
		profile.modified.InvSvg = true;
	}
}




RuleModifiers = {
	"InvSvgModifier": new InvSvgModifier()
};





Rule = Class.create({
	name: 'Rule',
	fields: {
		name: String,
		description: String,
		params: {
			type: Object,
			default: function(){return {}; }
		},
		profileModifierFunction: {
			type: String,
			default: function() { return "";}
		}
	},
	helpers: {
		applyModificationToProfile(unit, profile) {
			if(this.profileModifierFunction === "") return;
			RuleModifiers[this.profileModifierFunction].applyModificationToProfile(this.params, unit, profile);
		}
	}
});



import './methods.js';