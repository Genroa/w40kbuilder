

import { Class } from "meteor/jagi:astronomy";



ModelProfile = Class.create({
	name: 'ModelProfile',
	fields: {
		M: Number,
		WS: Number,
		BS: Number,
		S: Number,
		T: Number,
		W: Number,
		A: Number,
		Ld: Number,
		Svg: Number,
		InvSvg: Number,
		modified: {
			type: Object,
			default: function() {
				return {
					M: false,
					WS: false,
					BS: false,
					S: false,
					T: false,
					W: false,
					A: false,
					Ld: false,
					Svg: false,
					InvSvg: false
				};
			}
		}
	},
	helpers: {
		profileCopy() {
			return new ModelProfile({
				M: this.M,
				WS: this.WS,
				BS: this.BS,
				S: this.S,
				T: this.T,
				W: this.W,
				A: this.A,
				Ld: this.Ld,
				Svg: this.Svg,
				InvSvg: this.InvSvg
			});
		}
	}
});



ModelReference = Class.create({
	name: 'ModelReference',
	collection: new Mongo.Collection('model_reference'),
	fields: {
		name: String,
		profile: ModelProfile,
		pointsCost: Number,
		isReal: {
			type: Boolean,
			default: true
		}
	},
	helpers: {
		buildDefaultInstance(unit_reference) {
			let wargear = {};
			let wargearSlots = unit_reference.getModelChoice(this.name).wargearSlots;
			
			for(slotName in wargearSlots) {
				wargear[slotName] = wargearSlots[slotName].default;
			}

			return new Model({
				reference: this.name,
				woundsLeft: this.profile.W,
				wargear: wargear
			});
		}
	}
});


import './methods.js';