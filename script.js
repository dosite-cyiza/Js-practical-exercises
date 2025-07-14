const changeAllArticleColors =()=>{
    const constant = document.querySelectorAll("#products article")
    console.log(constant);
    for( let ele of constant){
        const newClass = ele.classList.add("sale")
    }
    const changeColor = document.querySelectorAll("#products .sale")
        changeColor.forEach((ele) => ele.style.backgroundColor ='ffddd2') 

}

changeAllArticleColors()

