/**
 * Created by Asnorrason on 15/02/16.
 */

//Add is a self-invoking function adding counter which is a local variable.
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// the counter is now 3