/*
Sort products
You are given an array of product objects,
 each containing a name (string) and a price (number).
  Your task is to implement a function called sortProducts 
  that sorts the products based on their prices in ascending order. 


*/
const sortProducts =()=>{
    let products  =[ 
        {name: "shoes",price: 200},
        {name: "clothes",price: 100},
        {name: "Bottle",price: 500}
]
const sortedObj = products.sort((a,b) => a.price - b.price)
return sortedObj
}
console.log(sortProducts())