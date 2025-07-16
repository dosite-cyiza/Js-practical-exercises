/*
*/

const attachBuyEvents = () => {
    const description = document.querySelectorAll("#products article")
    console.log(description)

    description.forEach(article => {
        console.log(article)
    })
    const productName = document.querySelectorAll(" #products h2")
    console.log(productName);

    const productNameArr = [...productName];
    console.log(productNameArr);

    console.log(productNameArr[0].textContent)


}
attachBuyEvents()