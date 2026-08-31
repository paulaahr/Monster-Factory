# Monster Factory

## Descripción

Monster Factory es un mini programa interactivo inspirado en *Monsters, Inc.* que funciona como un pequeño archivo de monstruos. Cada monstruo ya tiene información definida, como nombre, color, cantidad de ojos, personalidad, habilidad y rareza.

El proyecto comienza como una implementación en JavaScript y posteriormente se migra a TypeScript. La migración permite hacer más claras las estructuras de datos y controlar los valores permitidos para las diferentes características de los monstruos.

## Intención inicial

Crear un pequeño archivo interactivo de monstruos que permita consultar y organizar diferentes criaturas a partir de información previamente definida.

El programa utiliza filtros para encontrar monstruos según sus características y una función para calcular el promedio de ojos. Además, se utiliza programación asíncrona para simular la carga de la información sin bloquear el flujo del programa.

## Restricciones

* Los monstruos utilizan únicamente los atributos definidos en el archivo de datos.
* Cada monstruo debe tener nombre, color, cantidad de ojos, personalidad, habilidad y rareza.
* La consulta de información debe utilizar `Promise`, `async/await` y `setTimeout`.
* La versión TypeScript debe mantener la lógica principal de la versión JavaScript, incorporando tipos personalizados.
* Los valores de color, personalidad y rareza deben estar limitados mediante uniones literales.

## Criterios de aceptación

* El programa debe mostrar información de varios monstruos previamente definidos.
* El programa debe permitir filtrar los monstruos por color, personalidad y rareza.
* El programa debe utilizar `Promise`, `async/await` y `setTimeout` para simular una consulta asíncrona.
* La versión TypeScript debe utilizar al menos tres tipos personalizados entre `type` e `interface`.
* La versión TypeScript debe utilizar al menos una unión literal para controlar los valores permitidos.

## JavaScript avanzado

La versión JavaScript utiliza diferentes conceptos de JavaScript avanzado:

* **Módulos ES:** se utilizan `import` y `export` para separar los datos de la lógica del programa.
* **Funciones de orden superior:** se utilizan métodos como `filter`, `map` y `reduce` para trabajar con los datos de los monstruos.
* **Destructuring:** se utiliza para extraer características específicas de los objetos.
* **Spread:** se utiliza para copiar y combinar información de los objetos.
* **Closures:** se utiliza un contador cuyo valor permanece privado dentro de la función que lo crea.
* **Promesas:** se utiliza `Promise` para simular la carga de información de los monstruos.
* **async/await:** permite esperar el resultado de la consulta asíncrona de una manera más clara.
* **setTimeout:** simula un pequeño tiempo de espera durante la carga de información.
* **Manejo de errores:** se utiliza `try/catch` y `reject` para controlar posibles errores durante la consulta.

## Migración a TypeScript

La versión TypeScript mantiene la lógica principal de JavaScript, pero incorpora tipos para definir con mayor claridad la estructura de los datos.

Se utilizaron:

* `Color` como unión literal para definir los colores permitidos.
* `Personalidad` como unión literal para definir las personalidades disponibles.
* `Rareza` como unión literal para definir los niveles de rareza.
* `Monstruo` como `interface` para definir la estructura completa de cada monstruo.

También se tiparon las funciones principales indicando los tipos de sus parámetros y valores de retorno, por ejemplo `Monstruo[]`, `Color` y `Promise<Monstruo[]>`.

Durante la migración, TypeScript permitió detectar errores relacionados con los tipos de datos y los módulos. Esto ayudó a comprobar que las funciones recibieran la información esperada y que los valores utilizados pertenecieran a las categorías definidas.

## Comandos

### Instalar dependencias

```bash
npm install
```

### Ejecutar JavaScript

```bash
npm run dev:js
```

### Compilar TypeScript

```bash
npm run build
```

### Ejecutar TypeScript

```bash
npm run dev
```

## Git y GitHub

El proyecto se desarrolló utilizando Git y GitHub mediante la rama:

```text
feature/proyecto-1
```

Se realizaron commits durante el desarrollo para registrar la implementación inicial en JavaScript, la migración a TypeScript y las correcciones realizadas durante el proceso.

## Aprendizajes

Durante este proyecto aprendí a organizar mejor el código separándolo en diferentes módulos y a utilizar conceptos de JavaScript como `filter`, `reduce`, destructuring, spread, `Promise` y `async/await`.

También pude practicar el proceso de pasar un proyecto de JavaScript a TypeScript. La migración me ayudó a entender mejor para qué sirven los tipos, las interfaces y las uniones literales, ya que permiten definir con más claridad qué datos puede tener cada monstruo y ayudan a detectar errores mientras estoy programando.

Además, entendí mejor cómo funciona un flujo de trabajo con Git y GitHub, utilizando una rama de trabajo y registrando los cambios mediante commits.
