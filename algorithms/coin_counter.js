//Given a number of US cents, return the optimal minimal coins in an object
var fanny_pack = {quarters: 0, dimes: 0, nickels: 0, pennies: 0};
var coin_values = {quarters: 25, dimes: 10, nickels: 5, pennies: 1};
var remnant = 0; //needed to save the remaining amount after each add_coin

function add_coin(coin, amount){
    while (amount >= coin_values[coin]){
        amount -= coin_values[coin];
        fanny_pack[coin] += 1;
    };
    remnant = amount;
};
//One limitation is that the fanny_pack would need to be cleared if we want to use this function more than once
function reset_counter(){ for (coin in fanny_pack){
    fanny_pack[coin] = 0;
};
};
function coin_counter (amount){
    add_coin('quarters', amount);
    add_coin('dimes', remnant);
    add_coin('nickels', remnant);
    add_coin('pennies', remnant);
    console.log(fanny_pack); //In real life we would likely store fanny_pack to a result object that we would return?
    reset_counter();
};
coin_counter (787);
coin_counter (5);


/* I created the subordinate add_coin function after reviewing my first non-DRY answer...
 function coin_counter (amount){
        while (amount >= 25){
            amount -= 25;
            fanny_pack.quarters += 1;
        };
        while (amount >= 10){
            amount -= 10;
            fanny_pack.dimes += 1;
        };
        while (amount >= 5){
            amount -= 5;
            fanny_pack.nickels += 1;
        };
        while (amount >= 1){
            amount -=1;
            fanny_pack.pennies += 1;
        };
    };      */
