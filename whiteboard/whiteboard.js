/* For a given string s find the character c  with longest consecutive repetition and return:
[c, l]
where l  is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
For empty string return:
["", 0]



("aaaabb")=> ["a",4]
("bbbaaabaaaa")=> ["a",4]
("")=> ["",0]
("cbdeuuu900")=> ["u",3] */

function repetition(s) {
    let maxChar = ''
    let maxLen = 0
    let currChar = ''
    let currLen = 0

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] !== currChar) {
            if (currLen > maxLen) {
                maxLen = currLen
                maxChar = currChar
            }
            currChar = s[i]
            currLen = 1
        } else {
            currLen++
        }
    }
    

    if (currLen > maxLen) {
        maxLen = currLen;
        maxChar = currChar;
    }
    return [maxChar, maxLen]
}

console.log(repetition("aaaabb"))
// console.log(repetition("bbbaaabaaaa"))


function repetition(s){
    let maxCount = 0
    let maxletter = ''
    let count = 0
    let char_list = []
    for (let char of s){
        char_list.push(char)
    }
    console.log(char_list)
    for (let i in char_list){
        //console.log(typeof i)
        //console.log(char_list[i] == char_list[i+1])
        //console.log(char_list[i], char_list[i+1])
        if (char_list[i] == char_list[parseInt(i)+1]){
            count++
        }
        else {
            //console.log(char_list[i])
            count++
            if (count > maxCount){
                maxCount = count
                maxletter = char_list[i]
            }
            count = 0
        }
    }
    return[maxletter, maxCount]
}
console.log(repetition("bbbaaabaaaa"))