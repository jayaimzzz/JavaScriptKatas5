function reverseString(string){ 
    let result = '';
    for(let i = 0; i <= string.length; i++){
        result = result + string.charAt(string.length - i)
    }
    return result;
}

console.log(reverseString('abc'));