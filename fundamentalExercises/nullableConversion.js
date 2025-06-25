/*
Nullable conversion
you are given an object with properties that may contain null or undefined values. 

Your task is to implement a function called convertNullableValues that checks if any of
the properties in the object contains null or undefined. If a property is null convert it 
to zero and if a property is undefined convert it to an empty string. Return the modified object.

*/
const convertNullableValues =(obj)=>{
    for (const key in obj) {
        if (obj[key] === undefined) {
            obj[key] = ""   
        }
        if (obj[key] === null) {
            obj[key] = 0
            }
    }
    return obj

}
console.log(convertNullableValues (
    {
        name:"keza",
        address:"Muhanga",
        age:null,
        familyName :undefined
    }
));
