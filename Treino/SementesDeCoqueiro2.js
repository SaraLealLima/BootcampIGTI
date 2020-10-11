// criar uma função que recebe o numero de sementes como parametro
// apartir desse numero de sementes, vai printar cada vez que uma semente for plantada
// plantar td os negocio
// pra cada 4 sementes, nasce um coqueiro
// retornar quantos coqueiros vão nascer



function plantar () {
    var sementes = Number(document.getElementById('numeroSementes').value)
    if (sementes > 1000) {
        alert('Você não pode plantar mais que 1000 sementes')
        return
    } 
    var coqueiros = plantarSemente(sementes)
    document.getElementById("resultado").innerHTML = `Você plantou ${coqueiros} coqueiros`
}

function plantarSemente (sacoDeSemente) {
    var coqueiros = 0
    for (s = 1; s <= sacoDeSemente; s++) {
        console.log("Uma semente de coqueirinho foi plantada") 
        if (s % 4 === 0) {
            console.log("Um coqueirinho nasceu")
            coqueiros++
        }
    }
    return coqueiros
}



