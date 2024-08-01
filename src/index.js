module.exports = function reverse(n) {
	switch (true) {
		case n >= 0:
			return Number(String(n).split("").reverse().join(""));
		case n < 0:
			return Number(String(-n).split("").reverse().join(""));
	}
};
