const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    

    const arr = [1,2,3,4,5];
    const sArr = shuffleArray(arr);

    test('Returned Array', 
async () => {
    
    expect(sArr!=null).toBe(true)
})
test('return array same length as source array', 
async () => {
    
    expect(arr.length==sArr.length).toBe(true)
})
    
   
test('array is shuffled', 
async () => {
    
    let diffCount=0;
    for (let i in arr)
    {
        if(arr[i]!=sArr[i])
            ++diffCount;
    }
    expect(diffCount>0).toBe(true)
})
    // CODE HERE
});