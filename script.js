/*
*/

const attachBuyEvents =() =>{
const button = document.querySelectorAll("#products button")

button.forEach((ele) =>
ele.addEventListener('click',(event) =>{
    console.log(ele.parentElement.classList.toggle("sale"))
}))


 



}
attachBuyEvents()