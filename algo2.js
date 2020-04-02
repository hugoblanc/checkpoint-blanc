const numberList = [20,30,1,4,9,20]



// Ecrire une fonction prend en entrée un tableau de nombre (numberList) et qui retourne le tableau triée

// tu devra pouvoir appeler ta fonction comme il suit: console.log(leNomDeTaFonction(numberList))


function sort(array){
    return array.sort(function(a, b){return b-a});
}

console.log(sort(numberList))