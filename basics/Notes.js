/*
1. Variale declaration
    -> let,var,const and directly writng the variable name can be used for variable declaration.
    -> we will use let and const var should be avoided and directly writing the variable name as well as it reduces the readibilty.
    -> not assigining any value to any varaibler assigns it a undefined data value ny default

2. Data Types IN JS
    ->PRIMIRIVE-String,Number,boolean,null,symbol,big int,undefined(STACK MEMORY)
    ->NON-PRIMITIVE-Array,Object{Key:value},functions(HEAP MEMORY)
    //we cant use alert in this terminala s we are using node js it runs int the browser engine only not in the node js
    -> Numeric- to store the data in the numeric formats int,big_int.
    -> String- " "
    -> Boolean- true or false
    -> NULL- stand alone value(representation of empty value) typeof(NULL)->object 
    ,Undefined- value has not been yet assigned typeof(Undefined)-> undefined
    ->symbol- basically used when we need to define the uniqueness

3.Data Type Conversion 
    #For type casting just use the just write Number(),Boolean(),string() and so on...
    ->"33"=>33 "33abc"=>Nan(not a number) if we try to convert a string with letters to number it doesnt gets converted instead it's data type gets Nan. 
    -> 1 converts to true in boolean 
    -> 0 converts to false in boolean
    -> empty string converts to false and non empty converts to true
4.Operators
    -> == checks by typecasting eg "2"==2 return true
    -> === strict check it checks the data type as well as the value so "2"===2 returns false

5. Return Type
    Return type of variables in JavaScript
    1) Primitive Datatypes
        Number => number
        String  => string
        Boolean  => boolean
        *null  => object*
        undefined  =>  undefined
        Symbol  =>  symbol
        BigInt  =>  bigint

    2) Non-primitive Datatypes
        Arrays  =>  object
        Function  =>  object-function
        Object  =>  object

*/