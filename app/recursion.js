if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    return {
        listFiles: function(data, dirName) {
            var fileList = [],
                stack = [];

            function processDirectory(folder) {
                var i, n, entry,
                    entries = folder.files;

                stack.push(folder.dir);

                for (i=0, n=entries.length; i<n; i++) {
                    entry = entries[i];
                    if (typeof entry === 'string') {
                        if (dirName === undefined || stack.indexOf(dirName) > -1) {
                            fileList.push(entry);
                        }
                    } else {
                        processDirectory(entry);
                    }
                }
                stack.pop();
            }

            processDirectory(data);
            return fileList;
        },

        permute: function(arr) {

        }
    };
});
