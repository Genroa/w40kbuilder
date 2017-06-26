
import { Meteor } from 'meteor/meteor';
import { Router, RouteController } from 'meteor/iron:router';



/* Controleur standard qui fait les vérifications de base:
- redirection vers l'accueil si pas loggé

On peut se le permettre vu que ce sont les seules vérifications à faire, et qu'elles sont globales
sur toute l'application
*/

ApplicationController = RouteController.extend({
	onBeforeAction: function() {
		if(!this.ready()) {
			this.next();
		}
		else if(Meteor.loggingIn()) {
			this.render('loading');
		}
		else {
			var user = Meteor.user();
			// pas loggé
			if(!user) {
				//console.log("Redirection to login page...");
				//this.layout(undefined);
				this.render('login');
			}
			else {
				//this.layout("appLayout");
				this.next();
			}
		}
	}
});

/*
Configuration globale du routeur : on définit le controlleur par d�faut pour toute route
*/
Router.configure({
	controller: 'ApplicationController',
	notFoundTemplate: 'notFoundTemplate',
	layoutTemplate: 'appLayout'
});


// Login/register
Router.route('/login', {
	name: 'login',
	action: function() {
		this.render('login');
	}
});



// Accueil
Router.route('/', {
	name: 'home',
	action: function() {
		//Router.go('/agenda');
		this.render('home');
	}
});


// Edit army
Router.route('/edit/:id', {
	name: 'edit',
	data: function(){
		let army = Army.findOne({_id: this.params.id});
		if(!army) {
			this.render('loading');
		}

		return {"army" : army};
	},
	action: function() {
		this.render('edit');
	}
});


Router.route('/edit/:id/unit/:uid', {
	name: 'edit_unit',
	onBeforeAction: function () {
		let army = Army.findOne({_id: this.params.id});
		if(!army) {
			this.render('loading');
		} else {
			let unit = army.getUnit(this.params.uid);
			if(!unit) {
				this.render("edit", {
					data: function() {
						return {"army": army};
					}
				});
			} else {
				this.next();
			}
		}
	},
	data: function(){
		return {"army" : this.params.id, "unit": this.params.uid};
	},
	action: function() {
		this.render('edit_unit');
	}
});

