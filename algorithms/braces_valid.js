//Given a string and a set of braces, run parens_valid on all of them
function braces_valid(string){
    var brace_set = {'(':')', '{':'}', '[':']'}; //the function could be refactored to include brace_set as a parameter instead...
    var opens = Object.keys(brace_set); //make an array of all the open parentheses
    var closes = []; //and an array for all the closed parentheses. Object.values would be nice...
    var unresolved = []; //tracks unresolved open parens in the string
    for ( key in brace_set){ //This loop will revise brace_set to include a tracker for all paren types
        closes.push(brace_set[key]);  //populate the array of closed parentheses by adding the value of each key to closes
        brace_set[key] = [brace_set[key]]; //make the values into arrays so we can append the valence count to it
        brace_set[key].push(0); //This adds a 0 valence count to all keys; now every property has open paren: [close paren, valence count]
    };
    var current = ""; //this will be used in the for loop to keep track of the current index without nested brackets
    for(var i=0; i<string.length; i++){ //we finally start to read through the string
        current = string[i]; // again, this just makes later code more readable,  not strictly necessary but avoids confusing bracket nesting later
        if (opens.indexOf(current) >= 0){ //check if that char is in the opens array
            brace_set[current][1] += 1; //increase that key's valence value
            unresolved.unshift(current); //add the char to the front of the array of unresolved opens
        }
        else if (closes.indexOf(current) >= 0 ){ //check if its in the closes array
            var location = closes.indexOf(current); //find out which part of the closes array it's at
            var key = opens[location]; //so we can match the close bracket to the correct open bracket using the opens array
            brace_set[key][1] -=1; //lower that key's valence value
            if(brace_set[key][1] < 0){
                return false; //if valence ever goes negative, it means there have been more closes than opens, which is invalid
            }; //whenever we close a parentheses, we want to test- Is there a more recent open of a different type that hasn't closed?
            if (key != unresolved[0]){; //the most recent unresolved paren MUST match the close paren type
                return false;
            };
            unresolved.shift(key); //take the open paren off the unresolved array now that it's resolved
        }; //end of the else procedure for close parens
    };
    for( key in brace_set){
        if(brace_set[key][1] > 0){ //if any valence value remains, it means more opens than closes. If it was ever negative we'd have caught that already.
            return false;
        };
    };
    return true;
};
console.log(braces_valid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"));
console.log(braces_valid("D(i{a}l[ t]o)n{e"));
console.log(braces_valid("A(1)s[O (n]0{t) 0}k"));
