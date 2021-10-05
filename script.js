//variable

let vHelado = 3000;
let vHeladoVegano = 3500;

// Mensaje de prueba en consola

console.log("Mensaje de prueba");

// Saludo y operaciones 

let nombreCliente = prompt ("Ingrese nombre:");
alert("Bienvenido" + " " + nombreCliente + " " + "a nuestra pagina");
let cantHelados = parseInt(prompt("¿Cuantos helados vas a querer hoy?"));
let tHelado =prompt("Que tipo de helado vas a querer: ¿normal o vegano?");

if((tHelado == "normal") || ( tHelado == "NORMAL") || (tHelado == "Normal")){
    let totalPagar = cantHelados * vHelado;
    alert("El monto a pagar sera:" + " " + totalPagar);
}
else if ((tHelado == "vegano") || (tHelado == "VEGANO") || (tHelado == "Vegano")){
    let totalPagar = cantHelados * vHeladoVegano;
    alert("El monto a pagar sera:" + " " + totalPagar);
}
else{
    alert("El tipo de helado es incorrecto");
}
