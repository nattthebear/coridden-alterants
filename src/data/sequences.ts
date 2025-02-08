interface SequenceData {
	name: string;
	sequence: string[];
	stats: string[];
}

export const sequences: SequenceData[] = [
	{
		name: "Gladiatior",
		sequence: ["DmX", "DmX", "Ecr", "Crd", "Cr"],
		stats: ["Dual wield penalty: -100%", "+2 to all Weapon Based Attack skills"],
	},
	{
		name: "Judge",
		sequence: ["DmX", "DmX", "Ate", "Atb", "Crd"],
		stats: ["+2 to all Weapon Buff skills"],
	},
	{
		name: "Mender",
		sequence: ["ApX", "Apm", "Ews", "MeaX", "Mha"],
		stats: ["+2 to all Healing skills"],
	},
	{
		name: "Opal",
		sequence: ["PdX", "Csm", "Dm", "Cr"],
		stats: ["20% chance to spawn Shard of Energy on strike"],
	},
	{
		name: "Slasher",
		sequence: ["Bca", "Shm", "Atb", "Csm", "Cr"],
		stats: ["+10% Sharp damage", "+10% Sharp ability damage", "+1 to all Sharp skills"],
	},
	{
		name: "The Crawler",
		sequence: ["DeZ", "ApX", "Pre", "Are", "Adm", "Wh"],
		stats: ["+2 to all Crocolisk skills"],
	},
	{
		name: "Trapper",
		sequence: ["ApX", "MeaX", "Cos", "Cos", "Ag"],
		stats: ["+2 to all Trap skills"],
	},
	{
		name: "The Berserker",
		sequence: ["Apm", "Ews", "DeX", "MhaX", "Atp", "Ere"],
		stats: ["+2 to all Berserker skills"],
	},
	{
		name: "Blaze",
		sequence: ["Hea", "Dot", "FrX", "Atb", "DmX"],
		stats: ["+10% Heat damage", "+10% Heat ability damage", "+1 to all Heat skills"],
	},
	{
		name: "Celestial",
		sequence: ["Are", "MhaX", "Dem", "Atb", "MeaX"],
		stats: [
			"10% max Elemental damage resistance",
			"Elemental damage resistance: 10%",
			"Cannot be scorched",
			"Cannot be shocked",
			"Cannot be poisoned",
		],
	},
	{
		name: "Venom",
		sequence: ["Poa", "PdX", "Dot", "Atb", "Cr"],
		stats: ["+10% Poison damage", "+10% Poison ability damage", "+1 to all Poison skills"],
	},
];
