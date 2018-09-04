function testFunction(functionToTest, input, expectedResult) {
    let result = functionToTest(input);
    console.assert(result === expectedResult, {
        "function": functionToTest.name,
        "input": input,
        "expectedResult": expectedResult,
        "result": result
    })
}
function testEvaluateExpressions(expression, values, expectedResult) {
    let result = evaluateExpression(expression, values)
    console.assert(result === expectedResult, {
        "function": evaluateExpression.name,
        "input": expression, values,
        "expectedResult": expectedResult,
        "result": result
    })
}

function reverseString(string) {
    let result = '';
    for (let i = 0; i <= string.length; i++) {
        result = result + string.charAt(string.length - i);
    }
    return result;
}

function reverseASentence(sentence) {
    let result = [];
    let sentenceArray = sentence.split(' ')
    for (let i = 0; i < sentenceArray.length; i++) {
        result[i] = sentenceArray[sentenceArray.length - i - 1];
    }
    result = result.join(' ');
    return result;
}

function findMinimunValueInArray(array) {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i];
        }
    }
    return result;
}

function findMaximumValueInArray(array) {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

function calculateTheRemainder([numerator, denominator]) {
    return numerator % denominator;
}

function distinctValuesFromAList(string) {
    stringArray = string.split(' ');
    let result = [];
    for (i = 0; i < stringArray.length; i++) {
        if (!result.includes(stringArray[i])) {
            result.push(stringArray[i]);
        }
    }
    return result.join(' ')
}

function distinctValuesFromAListPlusCount(string) {
    stringArray = string.split(' ');
    let counts = {};
    let values = [];
    let result = '';
    for (i = 0; i < stringArray.length; i++) {
        if (!values.includes(stringArray[i])) {
            values.push(stringArray[i]);
            counts[stringArray[i]] = 1;
        } else {
            counts[stringArray[i]] =  counts[stringArray[i]] + 1;
        }
    }
    for(let i = 0; i < values.length; i++){
        result = result + values[i] + '(' + counts[values[i]] + ') '
    }
    return result.trim();
}


function evaluateExpression(expression, values){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(i = 0; i < alphabet.length; i++){
        expression = expression.replace(alphabet[i],values[alphabet[i]])
    }
    return eval(expression);
}

testFunction(reverseString, 'abc', 'cba');
testFunction(reverseString, 'James is testing!', '!gnitset si semaJ');
testFunction(reverseASentence, 'test one two', 'two one test');
testFunction(reverseASentence, 'bob likes dogs', 'dogs likes bob');
testFunction(findMinimunValueInArray, [1, 2, 3, 4, ], 1);
testFunction(findMinimunValueInArray, [3.44, 2.4, -1.2, 4, ], -1.2);
testFunction(findMaximumValueInArray, [1, 2, 3, 4], 4);
testFunction(findMaximumValueInArray, [0, -2, 33.444, 4.432], 33.444);
testFunction(calculateTheRemainder, [11, 2], 1);
testFunction(calculateTheRemainder, [-27, 5], -2);
testFunction(distinctValuesFromAList, '1 3 5 3 7 3 1 1 5', '1 3 5 7');
testFunction(distinctValuesFromAList, '1 4 3 4 56 7 56 -1 6 -1', '1 4 3 56 7 -1 6');
testFunction(distinctValuesFromAListPlusCount, '1 3 5 3 7 3 1 1 5', '1(3) 3(3) 5(2) 7(1)');
testFunction(distinctValuesFromAListPlusCount, '4 3 4 5 6 5 6 7 6 -2 4', '4(3) 3(1) 5(2) 6(3) 7(1) -2(1)');
testEvaluateExpressions("a + b", {a: 1, b: 2}, 3);
testEvaluateExpressions("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}, -3);
testEvaluateExpressions("a * z - c", {a: 2, c: 5, z: 6}, 7);
testEvaluateExpressions("a * (z - c)", {a: 2, c: 5, z: 6}, 2);
