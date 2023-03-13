const findOutlier = (arr) => {
    let evenNum = 0
    let oddNum = 0

    for(i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            evenNum++
        } else if (arr[i] % 2 !== 0){
            oddNum++
        }
        console.log(`evenNum = ${evenNum}, oddNum = ${oddNum}`)
    }

    if(oddNum > evenNum){
        for(i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                return arr[i]
            }
        }
    } else if (evenNum > oddNum){
        for(i = 0; i < arr.length; i++){
            if(arr[i] % 2 !== 0){
                return arr[i]
            }
        }
    }
}
let array1 = [2, 4, 0, 100, 4, 11, 2602, 36]
let array2 = [160, 3, 1719, 19, 11, 13, -21]
console.log(findOutlier(array1))
console.log(findOutlier(array2))