var numSort= []
var cont = 0

function sorteio(){
    while(cont < 6){
        let num = Math.random() * 60
        num = Math.ceil(num)
        console.log(num)
        cont ++
    }
}

sorteio()