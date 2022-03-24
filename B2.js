function findIndexOfNum(num, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            count = 1;
            console.log(`${num} is found in array at position ${i}`);
        }
    }
}
let arr = [1, 2, 3, 4, 5];
findIndexOfNum(2, arr);