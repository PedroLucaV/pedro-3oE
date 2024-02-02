//exemplo 01

function triplo(x){
    return 3 * x
}

let triploAnon = function(x){
    return 3 * x
}

triplo = (x) =>{
    return 3*x //caso eu usar as chaves na arrow function, É OBRIGATORIO O USO DE CHAVES!!!
}

triplo = (x) => 3 * x

console.log(triplo(5))