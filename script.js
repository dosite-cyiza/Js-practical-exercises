const attachBuyEvents =() =>{
const button = document.querySelectorAll("#products button")
console.log(button)

button.forEach((btn) =>{
    btn.addEventListener('click',(e) =>console.log(e.currentTarget)
)
})
}
attachBuyEvents()