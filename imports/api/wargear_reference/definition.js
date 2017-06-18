

import { Class } from "meteor/jagi:astronomy";



WargearSlotOptions = Object.freeze({
	
	GRENADE1:Symbol(),
	GRENADE2:Symbol(),
	TENTACLE:Symbol(),
	WEAPON1:Symbol(),
	WEAPON2:Symbol(),
	JUMPPACK:Symbol()
});



WargearReference = Class.create({
	name: 'WargearReference',
	collection: new Mongo.Collection('wargear_reference'),
	fields: {
		name: String
	},
	helpers: {
		
	}
});

import './methods.js';