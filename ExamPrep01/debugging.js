/**
 * Created by Asnorrason on 15/02/16.
 */

//Her kan man se at obj nedarver alle funktioner fra Object prototypen

var obj = Object.prototype;

console.log(Object.getOwnPropertyNames(obj).filter(function (p){
    return typeof obj[p] === 'function';
}))

module.exports = obj;

/**
 * [ 'constructor',
    'toString',
    'toLocaleString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    '__defineGetter__',
    '__lookupGetter__',
    '__defineSetter__',
    '__lookupSetter__' ]*/