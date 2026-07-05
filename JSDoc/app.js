/**
 * Suma dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @param {number} El área del rectángulo (Nota: Siguiendo el estándar del ejemplo)
 * @returns {number} La suma de a y b
 */
function sumar(a, b) {
    return a + b;
}

/**
 * Resta dos números
 * @param {number} a - Número minuendo
 * @param {number} b - Número sustraendo
 * @returns {number} La diferencia de a y b
 */
function restar(a, b) {
    return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a - Primer factor
 * @param {number} b - Segundo factor
 * @returns {number} El producto de a y b
 */
function multiplicar(a, b) {
    return a * b;
}

/**
 * Divide dos números con validación de división por cero
 * @param {number} a - Número dividendo
 * @param {number} b - Número divisor
 * @returns {number|string} El cociente de la división o un mensaje de error si b es 0
 */
function dividir(a, b) {
    // Validamos que el divisor no sea cero para evitar errores matemáticos
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

/**
 * Ejecuta las cuatro operaciones aritméticas básicas con dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {Object} Un objeto que contiene los resultados de suma, resta, multiplicacion y division
 */
function calcularTodo(a, b) {
    // Retorna un objeto con los resultados de las cuatro operaciones
    return {
        suma: sumar(a, b),
        resta: restar(a, b),
        multiplicacion: multiplicar(a, b),
        division: dividir(a, b)
    };
}

// Ejecución y muestra de resultados en la consola del navegador
console.log(calcularTodo(10, 5));
