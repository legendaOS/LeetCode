/**
 * @param {number} x
 * @return {number}
 */

 function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}


var reverse = function(x) {
    let buf = reverseString(x.toString())
    let ret
    if (buf.slice(-1) == '-'){
        ret =  (-1) * parseInt(buf)
    }
    else{
        ret =  parseInt(buf)
    }
    
    if (ret > (-2)**31 && ret < 2**31 - 1){
        return ret
    }
    else{
        return 0
    }
};