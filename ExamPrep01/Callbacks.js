/**
 * Created by Asnorrason on 15/02/16.
 */


//Original Array
var filterArr = ["lars", "bente", "maibritt", "BenteBent", "ib"];

//Filtering array
var result = filterArr.filter(
    function (value) {
        return (value.toString().length <= 3)
    }
);

console.log(result);