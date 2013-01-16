if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    return {
        indexOf : function(arr, item) {
            var i;
            for (i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === item) {
                    return i;
                }
            }
            return -1;
        },

        sum : function(arr) {
            var i, sum = 0;
            for (i = arr.length - 1; i >= 0; i--) {
                sum += parseInt(arr[i], 10);
            }
            return sum;
        },

        remove : function(arr, item) {
            var i, newArray = [];
            for (i = 0; i < arr.length; i++) {
                if (arr[i] !== item) {
                    newArray.push(arr[i]);
                }
            }
            return newArray;
        },
        
        removeWithoutCopy : function(arr, item) {
            while (arr.indexOf(item) > 0) {
                arr.splice(arr.indexOf(item), 1);
            }
            return arr;
        },

        append : function(arr, item) {
            arr[arr.length] = item;
            return arr;
        },

        truncate : function(arr) {
            arr.pop();
            return arr;
        },

        concat : function(arr1, arr2) {
            return arr1.concat(arr2);
        },

        insert : function(arr, item, index) {
            arr.splice(index, 0, item);
            return arr;
        },

        count : function(arr, item) {
            var i, count = 0;
            for (i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === item) {
                    count ++;
                }
            }
            return count;
        },

        duplicates : function(arr) {
            var i, dups = [];

            arr.sort( function (a, b) { return a-b; } );

            for (i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === arr[i+1]) {
                    dups.push(arr[i]);
                }
            }
            return dups;
        },

        square : function(arr) {
            var i;
            for (i = arr.length - 1; i >= 0; i--) {
                arr[i] = arr[i] * arr[i];
            }
            return arr;
        },

        findAllOccurrences : function(arr, target) {
            var i, occurances = [];
            for (i = 0; i < arr.length; i++) {
                if (arr[i] === target) {
                        occurances.push(i);
                }
            }
            return occurances;
        }
    };
});
