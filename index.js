let montoInicial, divisaOrigen, divisaDestino; 
   
// Capturar entradas mediante prompt() y validarlas 
do { 
    montoInicial = prompt('¡ Bienvenido/a a "Duka Casa de Cambio" ! \nPor favor ingrese el monto que desea intercambiar:'); 
} while (!esNumeroValido(montoInicial)); 
   
do { 
    divisaOrigen = prompt('Ingrese la divisa de origen (USD/ARS/EUR/BRL/CHF):'); 
} while (!esDivisaValida(divisaOrigen)); 
   
do { 
    divisaDestino = prompt('Ingrese la divisa de destino (USD/ARS/EUR/BRL/CHF):'); 
} while (!esDivisaValida(divisaDestino)); 

// Función para validar si es un número válido 
function esNumeroValido(num) { 
    return !isNaN(parseFloat(num)) && isFinite(num); 
} 
   
// Función para validar si es un nombre válido de divisa 
function esDivisaValida(divisa) { 
    const divisasValidas = ['ARS', 'USD', 'EUR', 'BRL', 'CHF']; 
    return divisasValidas.includes(divisa.toUpperCase()); 
} 
   
// Función para calcular el monto después del cambio de divisas 
function intercambiarDivisas(monto, tasaOrigen, tasaDestino) { 
    const montoEnDolares = monto / tasaOrigen; 
    const montoFinal = montoEnDolares * tasaDestino; 
    return montoFinal; 
} 
   
// Tasas de cambio fijas para simplificar el ejemplo 
const tasasDeCambio = { 
    USD: 1,    // Dolar Estadounidense
    ARS: 550, // Peso Argentino
    EUR: 0.91,   // Euro 
    BRL: 4.73,  // Real Brasilero
    CHF: 0.87  // Franco Suizo
}; 
   
// Obtener las tasas de cambio según las divisas seleccionadas 
const tasaOrigen = tasasDeCambio[divisaOrigen.toUpperCase()]; 
const tasaDestino = tasasDeCambio[divisaDestino.toUpperCase()]; 
   
// Realizar el intercambio de divisas 
const montoFinal = intercambiarDivisas(parseFloat(montoInicial), tasaOrigen, tasaDestino); 
   
// Salida de resultado por alert() 
alert(`${montoInicial} ${divisaOrigen.toUpperCase()} equivale a ${montoFinal.toFixed(2)} ${divisaDestino.toUpperCase()}`);