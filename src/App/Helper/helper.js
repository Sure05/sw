export const getId = (url) => {
	const regex = /[0-9]+/gm;
	let m
	while ((m = regex.exec(url)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}
		return Number(m[0])
	}
}

