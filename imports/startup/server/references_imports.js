import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

console.log("running references creation...");


import './references/rules.js';
import './references/wargears.js';
import './references/models.js';
import './references/units.js';
import './references/armies.js';



import '../../api/instances/definition.js';



Army.remove({});
if(Accounts.users.findOne({})) {
	let a1 = new Army({name: "My first army", 
					   reference: ArmyReference.findOne({name: "Dark Angels"})._id, 
					   owner: Accounts.users.findOne({})._id});
	a1.save();
}

console.log("done.");