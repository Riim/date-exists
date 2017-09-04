export function dateExists(date: string): boolean {
	let match = date.match(/\d+/g);

	if (!match) {
		throw new SyntaxError('Date must be in format "(d)d.(m)m.(yy)yy"');
	}

	let day = +match[0];
	let month = +match[1] - 1;
	let year = +match[2];

	if (year < 100) {
		year += year < 50 ? 2000 : 1900;
	}

	let d = new Date(year, month, day);

	return day == d.getDate() && month == d.getMonth() && year == d.getFullYear();
}
