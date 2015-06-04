var Logger = (function() {
    var instance = null;

    var privateMethod = function(str) {
        console.log(str);
    };

    var doLog = function(str) {
        privateMethod(str);
    };

    var init = function() {
        if (instance === null) {
            instance =  {
                log: doLog
            };
        }

        return instance;
    };

    return {
        getInstance: init
    };
})();

var instance1 = Logger.getInstance();
var instance2 = Logger.getInstance();

console.log(instance1 === instance2);

Logger.getInstance().log("I am singleton");