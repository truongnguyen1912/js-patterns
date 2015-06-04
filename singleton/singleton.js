var Logger = (function() {
    var instance = null;

    var privateMethod = function(str) {
        console.log(str);
    };

    var doLog = function(str) {
        privateMethod(str);
    };

    var init = function() {
        return {
            log: doLog
        };
    };

    return {
        getInstance: function() {
            if (instance === null) {
                instance = init();
            }

            return instance;
        }
    };
})();

var instance1 = Logger.getInstance();
var instance2 = Logger.getInstance();

console.log(instance1 === instance2);

Logger.getInstance().log("I am singleton");