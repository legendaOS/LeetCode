/**
 * @param {string} digits
 * @return {string[]}
 */

function appender(startArr, additionArray){
    let ret = []
    for(s of startArr){
        for(a of additionArray){
            ret.push(s+a)
        }
    }
    return(ret)
}

var letterCombinations = function(digits) {
    let keys = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9':['w','x','y','z']
    }

    if(!digits) return [] 

    let bufArr = digits.split('')
    let ret = keys[bufArr.shift()]

    return bufArr.reduce( (pval, item) => pval = appender(pval, keys[item]), ret)
};

console.log(letterCombinations('223'))

