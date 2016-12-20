"use strict";
function dateExists(date) {
    var match = date.match(/\d+/g);
    if (!match) {
        return false;
    }
    var day = +match[0];
    var month = +match[1] - 1;
    var year = +match[2];
    if (year < 100) {
        year += year < 50 ? 2000 : 1900;
    }
    var d = new Date(year, month, day);
    return day == d.getDate() && month == d.getMonth() && year == d.getFullYear();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dateExists;
