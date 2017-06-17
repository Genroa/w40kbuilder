import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
	import './on_account_creation.js';
	
	import '../../api/users/server/publications.js';
	import '../../api/users/methods.js';

	import '../../api/model_reference/server/publications.js';
	import '../../api/model_reference/methods.js';

	import '../../api/unit_reference/server/publications.js';
	import '../../api/unit_reference/methods.js';

	import '../../api/army_reference/server/publications.js';
	import '../../api/army_reference/methods.js';

	import '../../api/instances/server/publications.js';
	import '../../api/instances/methods.js';
	
	import './references_imports.js';
});