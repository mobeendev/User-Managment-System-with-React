
// Usage

// Split in group of 3 items
// var result = chunkArray([1,2,3,4,5,6,7,8], 3)

// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
// console.log(result)
function chunkArray(myArray, chunk_size) {
    let results = [];
    
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size))
    }

    return results;
}

export default chunkArray; 