
import { Class } from "meteor/jagi:astronomy";


StatsModifier = class {
	applyModificationToProfile(params, unit, profile) {

	}
}

InvSvgModifier = class extends StatsModifier {
	applyModificationToProfile(params, unit, profile) {
		profile.InvSvg = params.value;
		profile.modified.InvSvg = true;
	}
}




StatsModifiers = {
	"InvSvgModifier": new InvSvgModifier()
};



StatsModifierContainer = Class.create({
	name: 'StatsModifierContainer',
	fields: {
		statFunction: {
			type: String,
			default: ''
		},
		params: {
			type: Object,
			default: function(){return {};}
		}
	},
	helpers: {
		applyModificationToProfile(unit, profile) {
			if(this.statFunction === '') return;
			StatsModifiers[this.statFunction].applyModificationToProfile(this.params, unit, profile);
		}
	}
});