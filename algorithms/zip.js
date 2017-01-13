
function zip(keys, values){  //takes in two arrays called keys and values
    if (keys.constructor === Array && values.constructor === Array){ //Make sure they're arrays
        for (var i = 0; i < keys.length; i++){ //iterate through the keys
            object[keys[i]] = values[i]; //set each key property equal to same index of the values array
        };
    };
};
var object = {};
var arr1 = ["1","2","3"];
var arr2 = ["uno","dos","tres"];
zip(arr1, arr2);
console.log(object);
