let saldo = 20000
let = transa = []

function actualizarSaldo() {

    document.getElementById ("saldo").innerHTML = `Saldo actual es $$ ${saldo}`
}

 function Consulta() {
    alert (`Si saldo es: $$ ${saldo}`)
 }

 function mostrartransa(){
    const transalist = document.getElementById ("Transacciones")
    transalist.innerHTML =  transalist.forEach(
        transalist => {
            const li = document.createElement('li')
                li.innerTExt = Transaccion;
                transalist.appenChild(li);
            
    });
 }
 function Deposito()  {
    const cantidad = parseFloat(document.getElementById ("cantidad").value)

    if (isNaN(cantidad) || cantidad <=0 ) {
    alert("La cantidad depositada debe ser mayor a 0")
    return;
        
    }
    saldo += cantidad
    transa.push (`se depositado ${cantidad}`)
    actualizarSaldo(); //todo
    mostrartransa();

    alert(`se ha depositado $$ ${cantidad}`)


}
function Retiro(){
    const cantidad = parseFloat(document.getElementById ("cantidad").value)

    if (isNaN(cantidad) || cantidad <=0 ) {
        alert("La cantidad depositada debe ser mayor a 0")
        return;
    }
    if (cantidad > saldo) {
        alert("Los fondos son insuficientes")
        
    }

    saldo = cantidad
    transa.push(`se retiraron $$ ${cantidad}`)
    actualizarSaldo(); // todo
    mostrartransa();
    alert(`se han rettirado $$ ${cantidad}`)
}