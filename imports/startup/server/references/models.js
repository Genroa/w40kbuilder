


import '../../../api/model_reference/definition.js';



ModelReference.remove({});



new ModelReference({
	name: "Space Marine",
	wargearOptions: {}, // TODO
	pointsCost: 13,
	profile: new ModelProfile({
		M: 6,
		WS: 3,
		BS: 3,
		S: 4,
		T: 4,
		W: 1,
		A: 1,
		Ld: 7,
		Svg: 3,
		InvSvg: 0
	})
}).save();


new ModelReference({
	name: "Space Marine Sergeant",
	wargearOptions: {}, // TODO
	pointsCost: 13,
	profile: new ModelProfile({
		M: 6,
		WS: 3,
		BS: 3,
		S: 4,
		T: 4,
		W: 1,
		A: 2,
		Ld: 8,
		Svg: 3,
		InvSvg: 0
	})
}).save();


new ModelReference({
	name: "Deathwing Terminator",
	wargearOptions: {}, // TODO
	pointsCost: 26,
	profile: new ModelProfile({
		M: 5,
		WS: 3,
		BS: 3,
		S: 4,
		T: 4,
		W: 2,
		A: 2,
		Ld: 8,
		Svg: 2,
		InvSvg: 0
	})
}).save();


new ModelReference({
	name: "Deathwing Sergeant",
	wargearOptions: {}, // TODO
	pointsCost: 26,
	profile: new ModelProfile({
		M: 5,
		WS: 3,
		BS: 3,
		S: 4,
		T: 4,
		W: 2,
		A: 3,
		Ld: 9,
		Svg: 2,
		InvSvg: 0
	})
}).save();