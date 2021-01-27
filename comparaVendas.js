
let vendasOutros = [30, 12, 30, 18, 12]
let vendasCarlos = [20, 10, 35]

ProcessaResultado(vendasOutros,vendasCarlos)

function ProcessaResultado(resultadoOutros,resultadoCarlos) {

    const valoresUnicosDesc = [...new Set(resultadoOutros.sort(function(a, b){return b-a}))];

    let posicaoCarlos = 1

    for (i=0;i<resultadoCarlos.length;i++) {
        for (j=0;j<valoresUnicosDesc.length;j++){
            if (resultadoCarlos[i]<valoresUnicosDesc[j]) {
                posicaoCarlos++
            }
        }        
        console.log (posicaoCarlos)
        posicaoCarlos = 1

    }
}

