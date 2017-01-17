function parens_valid (string){
    var valence = 0; //valence will count open parentheses as positive and closed as negative. Valence must balance to 0 and never be negative
    for(var i=0;i<string.length;i++){  //go through the string
        if (string[i] == '('){ //check if its an open paren
            valence += 1; //if so, boost the valence counter by one.
        }
        else if (string[i] == ')'){ //if its a closed paren, reduce the valence by one
            valence -= 1;
            if (valence < 0){ //check if there are more closed parens than open
                return false;
            };
        };
    }; //end of the for loop. If code gets past here, valence is either positive or 0. Positive would mean more opens than closes.
    if (valence != 0){ //If there were more opens than closes, it's still not valid
        return false;
    };
    return true;
};

console.log(parens_valid("Hello (World)"));
console.log(parens_valid("(()))))"));
