

// function myEach (collection, callback) {

    

//     if (!Array.isArray(collection)) { // if an object, converts object to array, iterates through array
//         const convertedArray = Object.values(collection)
//         iterate(convertedArray, callback)
//         return collection;
//     } else {  // if not an object, does the same lines of code... Refactor?
//         const convertedArray = collection
//         iterate(convertedArray, callback)
//         return collection;
//     } 
// };

//returns unmodified collection
function myEach (collection, callback) {
    let convertedArray = collection; // Makes a copy of the collection
    if (!Array.isArray(convertedArray)) { // if an object, reasigns convertedArray to array made from object values
        convertedArray = Object.values(collection)
    }    

   

    for (const element of convertedArray) {
        callback(element); // calls the callback function once for each element of convertedArray
    }

    return collection;
};



// returns a new array based on teh follection
function myMap(collection, callback) {
    let convertedArray = collection; // Makes a copy of the collection
    if (!Array.isArray(convertedArray)) { // if an object, reasigns convertedArray to array made from object values
        convertedArray = Object.values(collection)
    } 

    const finalArray = [];
    

    for (const element of convertedArray) {
        finalArray.push(callback(element)) // Populates finalArray with the return value of each pass
    }

    return finalArray;

}

function myReduce(collection, callback, acc) {
    let convertedArray = collection; // Makes a copy of the collection
    if (!Array.isArray(convertedArray)) { // if an object, reasigns convertedArray to array made from object values
        convertedArray = Object.values(collection)
    } 

   if (acc === undefined) { // something here, skip over the first value. Do not multiply the first value by three.
       acc = convertedArray[0] // if no initial value is passed in, skips over the first element in the collection.
        for (let i = 1; i <convertedArray.length; i++) {
            acc = callback(acc, convertedArray[i], convertedArray)
        }
        return acc;
   } else { // if an initial value is passed in, proceeds as normal.
        for (const element of convertedArray) {
            acc = callback(acc, element, convertedArray)
        }
        return acc;
   }
}

function myFind(collection, callback) {
    let convertedArray = collection; // Makes a copy of the collection
    if (!Array.isArray(convertedArray)) { // if an object, reasigns convertedArray to array made from object values
        convertedArray = Object.values(collection)
    } 

    for (const element of convertedArray) {
        if (callback(element)) {
            return element;
        }
    }




}

function myFilter(collection, callback) {
    let convertedArray = collection; // Makes a copy of the collection
    if (!Array.isArray(convertedArray)) { // if an object, reasigns convertedArray to array made from object values
        convertedArray = Object.values(collection)
    } 

    const finalArray = [];

    for (const element of convertedArray) {
        if (callback(element)) {
            finalArray.push(element)
        }
    }

    return finalArray;
}

function mySize(collection) {
    let convertedArray = collection; // Makes a copy of the collection
    if (!Array.isArray(convertedArray)) { // if an object, reasigns convertedArray to array made from object values
        convertedArray = Object.values(collection)
    } 

    return convertedArray.length;
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n)
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length-1]
    } else {
        return array.slice(array.length-n, array.length)
    }
}

function myKeys(obj) {
    let keyArray = [];
    for (const key in obj) {
        keyArray.push(key);
    }
    return keyArray;
}

function myValues(obj) {
    let valueArray = []; 
    for (const key in obj) {
        valueArray.push(obj[key])
    }
    return valueArray;

}

function mySortBy (array, callback) {
    

    let transformedArray = [];
    for (const element of array) {
        transformedArray.push(callback(element))
    }

    console.log(transformedArray);

    let sortedArray = [...transformedArray];

    sortedArray.sort((a, b) => a - b)
    return sortedArray;
    
}