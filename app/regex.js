if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    return {
        containsNumber : function(str) {
            return (/\d/).test(str);
        },

        containsRepeatingLetter : function(str) {
            return (/([a-zA-Z])\1+/).test(str);
        },

        endsWithVowel : function(str) {
            return (/[aeiouy]$/i).test(str);
        },

        captureThreeNumbers : function(str) {
            var result = str.match(/(\d\d\d)/);
            return result !== null ? result[0] : false;
        },

        matchesPattern : function(str) {
            return (/^\d{3}\-\d{3}\-\d{4}$/).test(str);
        },

        isUSD : function(str) {
            return (/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/).test(str);
        }
    };
});
