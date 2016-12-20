export default function dateExists(date: string): boolean {
	let match = date.match(/\d+/g);

	if (!match) {
		return false;
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
