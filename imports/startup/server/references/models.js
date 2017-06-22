


import '../../../api/model_reference/definition.js';



ModelReference.remove({});



new ModelReference({
	name: "models.space_marines.space_marine",
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
	name: "models.space_marines.space_marine_sergeant",
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
	name: "models.space_marines.dark_angels.deathwing_terminator",
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
	name: "models.space_marines.dark_angels.deathwing_sergeant",
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


new ModelReference({
	name: "models.space_marines.dark_angels.watcher_in_the_dark",
	wargearOptions: {}, // TODO
	pointsCost: 0,
	isReal: false,
	profile: new ModelProfile({
		M: 0,
		WS: 0,
		BS: 0,
		S: 0,
		T: 0,
		W: 0,
		A: 0,
		Ld: 0,
		Svg: 0,
		InvSvg: 0
	})
}).save();