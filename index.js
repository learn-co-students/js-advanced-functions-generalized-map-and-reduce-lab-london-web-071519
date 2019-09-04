
function map(sourceArray, func) {
    let result = []

    for (let i = 0; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        result.push(func(element))
    }

    return result;
}

function reduce(sourceArray, func, starting) {
    let result = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1

    for (; i < sourceArray.length; i++) {
        result = func(sourceArray[i], result)
    }

    return result;
}