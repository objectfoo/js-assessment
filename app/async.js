if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
	return {
		async : function(value) {
			var dfd = $.Deferred();
			dfd.resolve(value);
			return dfd;
		},

		manipulateRemoteData : function(url) {
			var dfd = $.Deferred();
			$.getJSON(url, function (d) {
				var result = $.map(d.people, function (v,i) {
					return v['name'];
				});
				dfd.resolve(result.sort());
			});
			return dfd;
		}
	};
});
