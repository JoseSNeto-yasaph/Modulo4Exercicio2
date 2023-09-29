const list = [
    {
        name:"José",
        nota1:8,
        nota2:9
    },
    {
        name:"João",
        nota1:3,
        nota2:4
    },
    {
        name:"Maria",
        nota1:7,
        nota2:8
    },
    {
        name:"Josue",
        nota1:5,
        nota2:7
    }

]

let average = (nota1, nota2) => {
    return ((nota1 + nota2)/2).toFixed(1)
}


let result = (listAverage) => {
   return average(listAverage.nota1, listAverage.nota2)
}

for (let listAverage of list) { 

    if(result(listAverage) >= 7) {
        alert(`Parabêns ${listAverage.name}, você obeteve sucesso! \n Sua média foi de ${average(listAverage.nota1, listAverage.nota2)}`)
       } else {
        alert(`Que pena ${listAverage.name}, você está de recupéração! \n Sua média foi de ${average(listAverage.nota1, listAverage.nota2)}`)
       }
}