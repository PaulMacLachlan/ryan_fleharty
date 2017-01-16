//Given a string and a set of braces, run parens_valid on all of them
function braces_valid(string){
    var brace_set = {'(':')', '{':'}', '[':']'}; //the function could be refactored to include brace_set as a parameter instead...
    var opens = Object.keys(brace_set); //make an array of all the open parentheses
    var closes = []; //and an array for all the closed parentheses. Object.values would be nice...
    var unresolved = []; //tracks unresolved open parens
    for ( key in brace_set){
        closes.push(brace_set[key]);  //populate the array of closed parentheses by adding the value of each key to closes
        var valence = 0; //give every key an additional value to track the valence of that bracket type
        brace_set[key] = [brace_set[key]]; //make the values into arrays so we can append the valence to it
        brace_set[key].push(valence); //now every key has open paren: [close paren, valence count]
    };
    for(var i=0; i<string.length; i++){ //we finally read through the string
        var current = string[i]; //this makes later code more readable,  we know current is whatever character we're at in the string
        if ( opens.indexOf(current) >= 0){ //check if that char is in the opens array
            brace_set[string[i]][1] += 1; //increase that key's valence value
            unresolved.unshift(current); //add the char to the array of unresolved opens
        }
        else if (closes.indexOf(current) >= 0 ){ //check if its in the closes array
            var location = closes.indexOf(current); //find out which part of the closes array it's at
            var key = opens[location]; //so we can match the close bracket to the correct open bracket in opens array
            brace_set[key][1] -=1; //lower that key's valence value
            if(brace_set[key][1] < 0){
                return false;
            }; //whenever we close a parentheses, we want to test- Is there a more recent open of a different type that hasn't closed?
            if (key != unresolved[0]){; //check if you're mixing types improperly
                return false;
            };
            unresolved.shift(key); //take the open paren off the unresolved array now that it's resolved
        }; //end of the else procedure for close parens
    };
    for( key in brace_set){
        if(brace_set[key][1] > 0){
            return false;
        };
    };
    return true;
};

console.log(braces_valid("({[Hello World]})"));
console.log(braces_valid("True True[ () Very {True(})]"));
