import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

console.log("running references creation...");


import './references/models.js';
import './references/units.js';
import './references/armies.js';



import '../../api/army/definition.js';



Army.remove({});
let a1 = new Army({name: "My first army", 
				   reference: ArmyReference.findOne({name: "Dark Angels"})._id, 
				   owner: Accounts.users.findOne({})._id});
a1.save();



console.log("done.");