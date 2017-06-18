

import { Class } from "meteor/jagi:astronomy";




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