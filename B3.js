// const arr = ['u', 'e', 'o', 'a', 'i'];
// function check_number(item){ 
//   let arr_nguyen_am = item.filter(e => arr.some(i => i == e)) 
//   if(arr_nguyen_am.length > 0){
//     return arr_nguyen_am.length
//   } else {
//     return false
//   }
// }
// Truyền vào mảng


const nguyen_am = ["a", "e", "i", "o", "u"];

function check_number(text) {
    let counter = 0;

    for (let letter of text.toLowerCase()) {
        if (nguyen_am.includes(letter)) {
            counter++
        }
    }

    return counter > 0 ? counter : false
}