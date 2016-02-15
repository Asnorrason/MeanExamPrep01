/**
 * Created by Asnorrason on 15/02/16.
 */

//You can call a function like this:

var func = function(){
    console.log("This is a normal called function")
};

func();


//or you can make a function IIFE like this:

(function(){
    console.log("im a IIFE function");
})();