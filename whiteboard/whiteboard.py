""" /* For a given string s find the character c  with longest consecutive repetition and return:
[c, l]
where l  is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
For empty string return:
["", 0]



("aaaabb")=> ["a",4]
("bbbaaabaaaa")=> ["a",4]
("")=> ["",0]
("cbdeuuu900")=> ["u",3] */
 """

def longest_repetition(s):
    if not s:
        return ["", 0]
    
    max_char = s[0]
    max_len = 1
    curr_char = s[0]
    curr_len = 1
    
    for i in range(1, len(s)):
        if s[i] == curr_char:
            curr_len += 1
        else:
            if curr_len > max_len:
                max_len = curr_len
                max_char = curr_char
            curr_char = s[i]
            curr_len = 1
    
    if curr_len > max_len:
        max_len = curr_len
        max_char = curr_char
    
    return [max_char, max_len]
