
import { Class } from "meteor/jagi:astronomy";



ArmyUnitChoices = {
	"Dark Angels": function(unit_choices, army) {
		ArmyUnitChoicesSelectors.LimitedNumberSelector.checkChoiceAuthorized({unit_id: UnitReference.findOne({name: "Deathwing Terminator Squad"})._id, max: 2}, unit_choices, army);
	}
};



_ArmyUnitChoicesSelectors = class {
	checkChoiceAuthorized(params, choices, army) {
		
	}
};

class LimitedNumberSelector extends _ArmyUnitChoicesSelectors {
	checkChoiceAuthorized(params, unit_choices, army) {
		let foundNumber = 0;

		for(let unit of army.getUnits()) {
			let reference = UnitReference.findOne({_id: unit.reference});
			if(reference._id === params.unit_id) {
				foundNumber++;
			}

			if(foundNumber == params.max) {
				//console.log("Already found enough occurences of the unit among army units ("+name+")");

				for(let choice of unit_choices) {
					if(choice.reference._id === params.unit_id) {
						choice.authorized = false;
						if(params.max == 1) {
							choice.message = "cette unité ne peut exister qu'en un seul exemplaire";
						} else {
							choice.message = "cette unité ne peut exister qu'en "+params.max+" exemplaires";
						}
						
					}
				}
				return;
			}
		}
	}
}

ArmyUnitChoicesSelectors = {
	"LimitedNumberSelector": new LimitedNumberSelector()
};



ArmyReference = Class.create({
	name: 'ArmyReference',
	collection: new Mongo.Collection('army_reference'),
	fields: {
		name: String,
		factionKeywords: [String],
		acceptedUnitsKeywords: [String],
		armyChoicesSelectionFunction: String,
		keywordReplacement: {
			type: Object,
			default: function(){return {};}
		}
	},
	helpers: {
		getUnitsChoices() {
			let unit_references = UnitReference.find({factionKeywords: {$in: this.acceptedUnitsKeywords} }).fetch();
			let unit_choices = [];

			for(unit_reference of unit_references) {
				
				unit_choices.push({reference: unit_reference, 
							authorized: true,
							message: null});
			}

			return unit_choices;
		},

		getAuthorizedUnitsChoices(army) {
			let unit_choices = this.getUnitsChoices();

			// Here, filter
			ArmyUnitChoices[this.armyChoicesSelectionFunction](unit_choices, army);

			return unit_choices;
		}
	}
});





import './methods.js';