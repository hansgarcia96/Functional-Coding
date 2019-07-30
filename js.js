
const shoppingCart = [
    {item: "soap", price: 1},
    {item: "towel", price: 5},
    {item: "sunscreen", price: 7.50}
]

newShoppingCart = shoppingCart.map(function (particularItem){
    if (particularItem.item === "towel") {return {item: "beach towel", price: 15}}
    else {return particularItem;} 
});


console.log(newShoppingCart)




// function makeAdjustifier(adjective){
//     return function (string) {
//         return adjective + " " + string;
//     };
// }

// var chillifier = makeAdjustifier("chill AF");
// console.log(chillifier("coding"));








