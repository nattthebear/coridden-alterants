export function makeMultiMap<K, V>(entries: Iterable<[K, V]>): Map<K, V[]> {
	const ret = new Map<K, V[]>();
	for (const [k, v] of entries) {
		let list = ret.get(k);
		if (!list) {
			ret.set(k, (list = []));
		}
		list.push(v);
	}
	return ret;
}
