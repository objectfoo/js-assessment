if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	return {
		valueAtBit: function(num, bit) {
			var numArr = num.toString(2).split('').reverse();
			return parseInt(numArr[bit-1], 10);
		},

		base10: function(str) {
			return parseInt(str, 2);
		},

		convertToBinary: function(num) {
			var binStr = num.toString(2);

			function padLeadingZeros (str, cnt) {
				if (cnt >= 0) {
					str = '0' + str;
					padLeadingZeros(str, --cnt);
				}
				return str;
			}

			return padLeadingZeros(num.toString(2), 8 - (binStr.length + 1));
		},

		multiply: function(a, b) {
			a = a * 10;
			b = b * 10;
			return (a*b) / 100;
		}
	};
});
