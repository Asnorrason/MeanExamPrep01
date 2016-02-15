/**
 * Created by Asnorrason on 15/02/16.
 */

//Pga hoisting bliver var x kørt som det første, og derefter får den en værdi, derfor vil programmet kunne udskrive x som 5.
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x


//Y er undefined her, da den bliver deklareret, men ikke indeholder værdi før tilsidst i programmet.

var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y

