/*
*/

const attachBuyEvents =() =>{
const button = document.querySelectorAll("#products button")

button.forEach((ele) =>
ele.addEventListener('click',(event) =>{
    console.log(ele.parentElement.classList.toggle("sale"))
    
    
}))

const articles = document.querySelectorAll('#products article')
console.log(articles)
articles.forEach((article) => {
console.log(article.getAttribute("data-id"));
})

 



}
attachBuyEvents()