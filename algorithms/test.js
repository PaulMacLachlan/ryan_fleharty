function isHungry (array){
    for(var idx=0;idx<array.length;idx++){
        if(array[idx] == "food"){
            console.log("yummy");
        };
    };
    if(array.indexOf("food") == -1){
        console.log("I'm hungry");
    };
};

isHungry([5, 10, "apple", "food", "food"]);
