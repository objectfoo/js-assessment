if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    return {
        argsAsArray : function(fn, arr) {
            return fn (arr[0], arr[1], arr[2]);
        },

        speak : function(fn, obj) {
            return fn.apply(obj);
        },

        functionFunction : function(str) {
            return function (secondString) {
                return str + ', ' + secondString;
            };
        },

        makeClosures : function(arr, fn) {
            var i, closure, retArr = [],

            makeClosure = function (num) {
                return function () {
                    return fn (num);
                };
            };

            for (i = 0; i < arr.length; i++) {
                retArr.push(makeClosure(arr[i]));
            }
            return retArr;
        },

        partial : function(fn, str1, str2) {
            return function (str3) {
                return fn.call(null, str1, str2, str3);
            };
        },

        useArguments : function() {
            var i, args = arguments, total = 0;
            for (i = args.length - 1; i >= 0; i--) {
                total += args[i];
            }
            return total;
        },

        callIt : function(fn) {
            var slice = Array.prototype.slice;
            return fn.apply(null, slice.call(arguments, 1));
        },

        partialUsingArguments : function(fn) {
            var slice = Array.prototype.slice,
                args = slice.call(arguments, 1);
            
            return function () {
                args = args.concat(slice.call(arguments));
                return fn.apply(null, args);
            };
        },

        curryIt : function(fn, n) {
            if (typeof n !== 'number') {
                n = fn.length;
            }

            function makeCurryFn (prev) {
                return function(arg) {
                    var args = prev.concat(arg);
                    if (args.length < n) {
                        return makeCurryFn(args);
                    } else {
                        return fn.apply(this, args);
                    }
                };
            }
            return makeCurryFn([]);
        }
    };
});
