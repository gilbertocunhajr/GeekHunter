let pessoas = 4 
let numitens=5
let itensFora = []
let itens = []


function adicionaItem(item,valor){
    itens.push({item:item,valor:valor})
}

function excluiItemConta(item){
    itensFora.push(item)
}

adicionaItem('bebidas',150)
adicionaItem('entrada',100)
adicionaItem('principal',400)
adicionaItem('sobremesa',300)
adicionaItem('reserva',40)

excluiItemConta('bebidas')
excluiItemConta('reserva')


let valorexcluir = 0
let total = 0

for(const itemfora of itensFora) {
  for (const item of itens){
      if (item.item == itemfora) {
        valorexcluir +=item.valor
       }
  }
}

for (const item of itens){
   total +=item.valor
}
console.log(total)
valorPorCada = (total-valorexcluir)/pessoas
console.log(valorPorCada)
console.log(valorexcluir)

