/**
 * Created by Asnorrason on 15/02/16.
 En variable kan bruges før den deklareres.
 Hoisiting er javascript som sætter alle deklareringerne i toppen af dokumentet.
 Før at programmet skal kende værdien af variablen, skal det ske før den skal bruges,
 ellers kender programmet kun variablen,
 men ikke værdien, dette vil give et resultat som eksempel to, hvor y er ”undefined”
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

