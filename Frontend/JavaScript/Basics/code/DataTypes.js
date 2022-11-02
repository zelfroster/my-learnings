const prompt = require("prompt-sync")();
//There are two types of data types in JavaScript
//
//1. Primitive
//A Primitive value or data type in JavaScript is data that is not an object
//and has no methods and properties
//
//2. Objects

//Types of Primitive data types

//1. Boolean
//boolean consists of only 'true' or 'false' value
var bool = true;

//2. Null
//---------------------------JAVASCRIPT IS WEIRD------------------------------//
//In computer science 'null' value is a reference to a nonexistent object or
//address, but when we log the type of 'null', it prints 'object'. whaaaaaat?
//Yes, It is a bug in JavaScript which can't be fixed as it might break scripts
var null = null;

//3. Undefined
//When a variable is only declared and not initialized, JavaScript assigns
//it a value called undefined as a placeholder for the variable
var undef = undefined;

//4. Number
//The JavaScript number data type can store double precision values
//It can store floating point values as well.
var num = 69;

//5. BigInt
//With BigInts, we can safely store and operate on large integers even beyond
//the safe integer limit for Numbers.
var bigInt = true;

//6. String
//Strings are immutable in JavaScript, which means once a string is created it
//is not possible to change it, We can only create new strings from it.
//String represents a textual data, containing of elements of 16-bit unsigned
//integer values. Index starts from 0.
var str = "string";

//7. Symbol
//Symbol is a built-in object whose constructor returns a unique symbol value
const sym = Symbol();
const sym1 = Symbol('hello');
const sym2 = Symbol('hello');
Symbol('hello') === Symbol('hello') // It will result in false since symbol
//does not coerce the string passed in it, it creates a new unique symbol

