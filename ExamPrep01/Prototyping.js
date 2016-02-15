/**
 * Created by Asnorrason on 15/02/16.

Ved at bruge prototyping kan man inherit ligesom i Java.
    For at forstå det bedre se opgave eksemplet.
    Man laver en funktion som laver en person med data.
    Derefter laver man en ny person hvor man indsætter forskellige data. */

function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);