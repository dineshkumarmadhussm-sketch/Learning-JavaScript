const marval_heros = ["thor" , "Ironman" , " spiderman"]

const dc_hero = ["superman" , "flashh" , "batman" ]

// marval_heros.push(dc_hero)
// //console.log(marval_heros);

// const another_array = marval_heros.flat(Infinity)

// //console.log(another_array);

// const allHeros = marval_heros.concat(dc_hero)

// //console.log(allHeros)

const all_new_heros = [...marval_heros, ...dc_hero]   // This is spreade methode 
console.log(all_new_heros);

const myArray = [1,2,3,[4,5,6,[7,8,9]]]
const real_myArray = myArray.flat(Infinity)
console.log(real_myArray);