# Práctica Nro 13: Estándares de Documentación (JSDoc) 

Este repositorio contiene la resolución de la **Guía de Práctica Nro 13** correspondiente a la unidad didáctica de **Estándares de codificación**.

El propósito de esta práctica es aplicar estándares de documentación profesional en JavaScript, utilizando comentarios estructurados **JSDoc** y comentarios de línea significativos para explicar la lógica del negocio.

---

## 📂 Estructura del Proyecto

```text
semana13_[tu_nombre]/
├── index.html     # Página principal para la ejecución del script
└── app.js         # Archivo JavaScript con funciones matemáticas completamente documentadas

Tecnologías y Herramientas Utilizadas
HTML5 y JavaScript (ES6+)

Visual Studio Code (Editor de código)

Live Server (Extensión para despliegue local rápido)

Google Chrome DevTools (Consola del navegador para verificar resultados)

 Funciones Implementadas y Documentadas
En el archivo app.js se implementaron las siguientes funciones utilizando la convención estándar de JSDoc:

sumar(a, b): Retorna la suma de dos números.

restar(a, b): Retorna la diferencia de dos números.

multiplicar(a, b): Retorna el producto de dos números.

dividir(a, b): Retorna el cociente con una validación previa para evitar la división por cero (b === 0).

calcularTodo(a, b): Centraliza y ejecuta las cuatro operaciones básicas, retornando un objeto con todos los resultados estructurados.

Ejemplo de uso de JSDoc en el código:
JavaScript
/**
 * Suma dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La suma de a y b
 */
function sumar(a, b) {
    return a + b;
}
 Resultados en Consola
Al ejecutar el proyecto con Live Server e ingresar a las Herramientas de Desarrollador (F12 -> Consola), la invocación de calcularTodo(10, 5) imprime de manera exitosa el siguiente objeto de resultados:

JSON
{
  "suma": 15,
  "resta": 5,
  "multiplicacion": 50,
  "division": 2
}
