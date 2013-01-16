if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    return {
        alterContext : function(fn, obj) {
            return fn.apply(obj);
        },

        alterObjects : function(constructor, greeting) {
            constructor.prototype.greeting = greeting;
            return constructor;
        },

        iterate : function(obj) {
            var result = [],
                key;

            for(key in obj) {
                if(obj.hasOwnProperty(key)) {
                    result.push(key + ': ' + obj[key]);
                }
            }
            return result;
        }
    };
});
