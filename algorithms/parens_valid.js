function parens_valid (string){
    var paren_tracker = 0; //paren_tracker will count open parentheses as positive and closed as negative. paren_tracker must balance to 0 and never be negative
    for(var i=0;i<string.length;i++){  //go through the string
        if (string[i] == '('){ //check if its an open paren
            paren_tracker += 1; //if so, boost the paren_tracker counter by one.
        }
        else if (string[i] == ')'){ //if its a closed paren, reduce the paren_tracker by one
            paren_tracker -= 1;
            if ( paren_tracker < 0){ //check if there are more closed parens than open
                return false;
            };
        };
    }; //end of the for loop. If code gets past here, paren_tracker is either positive or 0. Positive would mean more opens than closes.
    if (paren_tracker != 0){ //If there were more opens than closes, it's still not valid.
        return false;
    };
    return true;
};

console.log(parens_valid("Hello (World)"));
console.log(parens_valid("(()))))"));
