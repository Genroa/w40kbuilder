

import '../../../api/wargear_reference/definition.js';


WargearReference.remove({});

/**********************************/
/*         RANGED WEAPONS         */
/**********************************/


new WargearReference({
	name: "wargears.ranged.assault_bolter",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Assault 3",
			range: 18,
			S: 5,
			AP: -1,
			D: 1
		})
	],
	cost: 0
}).save();

new WargearReference({
	name: "wargears.ranged.boltgun",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Rapide Fire 1",
			range: 24,
			S: 4,
			AP: 0,
			D: 1
		})
	],
	cost: 0
}).save();

new WargearReference({
	name: "wargears.ranged.bolt_pistol",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Pistol 1",
			range: 12,
			S: 4,
			AP: 0,
			D: 1
		})
	],
	cost: 0
}).save();

new WargearReference({
	name: "wargears.ranged.combi_grav",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			profileName: "Boltgun",
			type: "Rapide Fire 1",
			range: 24,
			S: 4,
			AP: 0,
			D: 1
		}),
		new WeaponProfile({
			profileName: "Grav-gun",
			type: "Rapide Fire 1",
			range: 18,
			S: 5,
			AP: -3,
			D: 1,
			ability: "If the target has a Save characteristic of 3+ or better, this weapon has a Damage characteristic of D3."
		})
	],
	cost: 17,
	ability: "When attacking with this weapon, choose one or both of the profiles below. If you choose both, substract 1 from all hit rolls for this weapon."
}).save();

new WargearReference({
	name: "wargears.ranged.frag_grenade",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Grenade D6",
			range: 6,
			S: 3,
			AP: 0,
			D: 1
		})
	],
	cost: 0
}).save();

new WargearReference({
	name: "wargears.ranged.krak_grenade",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Grenade 1",
			range: 6,
			S: 6,
			AP: -1,
			D: "D3"
		})
	],
	cost: 0
}).save();

new WargearReference({
	name: "wargears.ranged.plasma_cannon",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			profileName: "Standard",
			type: "Heavy D3",
			range: 36,
			S: 7,
			AP: -3,
			D: 1
		}),
		new WeaponProfile({
			profileName: "Supercharge",
			type: "Heavy D3",
			range: 36,
			S: 8,
			AP: -3,
			D: 2,
			ability: "On a hit roll of 1, the bearer is slain after all of this weapon's shots have been resolved."
		})
	],
	cost: 21,
	ability: "When attacking with this weapon, choose one of the profiles below."
}).save();

new WargearReference({
	name: "wargears.ranged.storm_bolter",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Rapide Fire 2",
			range: 24,
			S: 4,
			AP: 0,
			D: 1
		})
	],
	cost: 2,
}).save();

/**********************************/
/*          MELEE WEAPONS         */
/**********************************/

new WargearReference({
	name: "wargears.melee.chainfist",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Melee",
			range: 0,
			S: "x2",
			AP: -4,
			D: 2
		})
	],
	cost: 22,
	ability: "When attacking with this weapon, you must substract 1 from the hit roll."
}).save();

new WargearReference({
	name: "wargears.melee.lightning_claw",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Melee",
			range: 0,
			S: "User",
			AP: -2,
			D: 1
		})
	],
	cost: 9,
	ability: "You can re-roll failed wound rolls for this weapon. If a model is armed with two lightning claws, each time it fights it can make 1 additional attack with them."
}).save();

new WargearReference({
	name: "wargears.melee.lightning_claw_pair",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Melee",
			range: 0,
			S: "User",
			AP: -2,
			D: 1
		})
	],
	cost: 6.5,
	ability: "You can re-roll failed wound rolls for this weapon. If a model is armed with two lightning claws, each time it fights it can make 1 additional attack with them."
}).save();

new WargearReference({
	name: "wargears.melee.power_fist",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Melee",
			range: 0,
			S: "x2",
			AP: -3,
			D: "D3"
		})
	],
	cost: 20,
	ability: "When attacking with this weapon, you must substract 1 from the hit roll."
}).save();

new WargearReference({
	name: "wargears.melee.power_sword",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Melee",
			range: 0,
			S: "User",
			AP: -3,
			D: 1
		})
	],
	cost: 4,
}).save();

new WargearReference({
	name: "wargears.melee.thunder_hammer_characters",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Melee",
			range: 0,
			S: "x2",
			AP: -3,
			D: 3
		})
	],
	cost: 25,
	ability: "When attacking with this weapon, you must substract 1 from the hit roll."
}).save();

new WargearReference({
	name: "wargears.melee.thunder_hammer",
	type: WargearType.WEAPON,
	weaponProfiles: [
		new WeaponProfile({
			type: "Melee",
			range: 0,
			S: "x2",
			AP: -3,
			D: 3
		})
	],
	cost: 20,
	ability: "When attacking with this weapon, you must substract 1 from the hit roll."
}).save();


/**********************************/
/*        OTHER WEARGEAR          */
/**********************************/

new WargearReference({
	name: "wargears.equipment.storm_shield_characters",
	type: WargearType.EQUIPMENT,
	cost: 15,
	ability: "A model with a storm shield has a 3+ invulnerable save."
}).save();

new WargearReference({
	name: "wargears.equipment.storm_shield",
	type: WargearType.EQUIPMENT,
	cost: 5,
	ability: "A model with a storm shield has a 3+ invulnerable save."
}).save();







