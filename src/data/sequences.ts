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
];
