// All valid, invalid, and mystery credit card numbers
const Cards = {
    valid1: [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8],
    valid2: [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9],
    valid3: [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6],
    valid4: [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5],
    valid5: [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6],
    invalid1: [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5],
    invalid2: [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3],
    invalid3: [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4],
    invalid4: [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5],
    invalid5: [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4],
    mystery1: [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4],
    mystery2: [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9],
    mystery3: [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3],
    mystery4: [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3],
    mystery5: [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3],
}


/* Original Solution:
function validateCredOriginal(arr) {
    // Reverse input array
    let revArr = arr.reverse()

    // Iterate on reversed array & double every other number
    let newArr = [];
    for (let i = 0; i < revArr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(revArr[i]);
        } else {
            let doubled = revArr[i] * 2;
            if (doubled > 9) {
                newArr.push(doubled - 9);
            } else {
                newArr.push(doubled);
            }
        }
    }

    // Sum the array
    let creditSum = 0;
    for (let i = 0; i < newArr.length; i++) {
        creditSum = creditSum + newArr[i];
    }

    // Return validity
    if (creditSum % 10 === 0) {
        return true;
    } else {
        return false;
    }
}
*/

// Refactored Solution:
const validateCred = arr => {
    return arr  .reverse()
                .map((e,i) => i % 2 ? e * 2 : e )
                .map(e => e > 9 ? e - 9 : e )
                .reduce((a,c) => a + c ) % 10 ? false : true;
}

// Automated check:
for (number in Cards) {
    console.log( validateCred(Cards[number]) );
}
