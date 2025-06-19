const arrayStats = (arr) =>{
    for (let i=0; i<arr.length; i++){
     let sum = arr.reduce((acc,curr) => acc + curr , 0)
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let average = sum /arr.length

    let arrayStatsObj= {}
     Object.assign(arrayStatsObj,
        {
        sum :sum,
        average:average,
        max :max,
        min:min
    }
    )

    return arrayStatsObj
    
    }
}
console.log(arrayStats([1,2,3,4,5]))