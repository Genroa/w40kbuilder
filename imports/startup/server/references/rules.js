


import '../../../api/rule_reference/definition.js';





_Rules = {
		"Storm Shield": new Rule({
			name: "Storm Shield",
			description: "Models equipped with a storm shield have a 3+ invulnerable save"
			//profileModifier: null // TODO
		}),
		"Teleport Strike": new Rule({
			name: "Teleport Strike",
			description: "During deployment, you can set up this unit in a <i>teleportarium</i><br>chamber instead of placing it on the battlefield. At the end of your<br>Movement phase this unit can teleport into battle - set it up anywhere<br>on the battlefield that is more than 9\" from any enemy models."
		}),
		"Terminator Armour" : new Rule({
			name: "Terminator Armour",
			description: "Models with Terminator Armor in this unit have 5+ invulnerable save",
			profileModifier: new StatsModifierContainer({
				statFunction: "InvSvgModifier",
				params: {value: 5}
			})
		}),
		"Unforgiven": new Rule({
			name: "Unforgiven",
			description: "This unit automatically passes Morale tests. In addition, you can<br>re-roll failed hit rolls in the Fight phase for this unit if it is<br>targeting a Fallen unit"
		}),
		"Watcher in the Dark": new Rule({
			name: "Watcher in the Dark",
			description: "Once per game, if an enemy psychic power affects this unit, and this unit is<br>accompanied by a Watcher in the Dark, roll a dice. On a 3+ the power has no<br>effect on this unit (all other targets are affected normally). Remove the<br>Watcher in the Dark from play after this roll has been made, whether successful<br>or not. The Watcher in the Dark model must always remain as close to this<br>unit as possible, but is otherwise ignored for all other gaming purposes. Remove<br>the Watcher in the Dark if this unit is slain."
		})
	};


export {_Rules as Rules};