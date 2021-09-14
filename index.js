// Your code here

function mapToNegativize(sourceArray){
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * (-1))
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = [];
    for(let i = 0; i < sourceArray.length; i ++){
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for(let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray){
    let returnValue = true;
    for(let i = 0; i < sourceArray.length; i ++){
        if (!!sourceArray[i] === true){
            returnValue = true;
        } else {
            returnValue = false;
            break
        }
    }
    return returnValue
}

function reduceToAnyTrue(sourceArray){
    let returnValue = false;
    for(let i = 0; i < sourceArray.length; i ++){
        if(!!sourceArray[i] === true){
            returnValue = true
            break;
        }
    }
    return returnValue
}


// function 