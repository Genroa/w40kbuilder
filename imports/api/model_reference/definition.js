

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
		wargearOptions: Object,
		profile: ModelProfile,
		pointsCost: Number,
		isReal: {
			type: Boolean,
			default: true
		}
	},
	helpers: {
		buildDefaultInstance() {
			return new Model({
				reference: this.name,
				woundsLeft: this.profile.W,
				wargear: {"main_weapon": "Boltgun", 
						  "grenade1": "Frag grenades", 
						  "grenade2": "Krak grenades"}
			});
		}
	}
});


import './methods.js';