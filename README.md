# Monster Factory

## Descripción

Monster Factory es un mini programa interactivo que simula una fábrica de monstruos inspirado en la película Monster INC. El programa combina diferentes características para generar criaturas con un nombre, personalidad, habilidades y nivel de rareza.

El proyecto comienza como una implementación en JavaScript y posteriormente se migra a TypeScript, haciendo explícitas las estructuras de datos, categorías y funciones principales.

## Intención inicial

Crear una experiencia interactiva que permita generar monstruos mediante la combinación aleatoria de diferentes atributos predefinidos.

La generación simula un proceso de fabricación dividido en diferentes etapas, utilizando programación asíncrona para representar un proceso no bloqueante.

## Restricciones

* Los monstruos se generan únicamente utilizando los atributos definidos en las listas de datos.
* Cada monstruo debe tener nombre, color, cantidad de ojos, personalidad, habilidad y rareza.
* La generación debe realizarse de manera asíncrona mediante `Promise` y `async/await`.
* La versión TypeScript debe mantener la lógica principal de la versión JavaScript, incorporando tipado explícito.

## Criterios de aceptación

* El programa debe generar un monstruo con al menos cinco características diferentes.
* La generación debe utilizar `Promise` y `async/await`.
* La versión TypeScript debe utilizar tipos personalizados, interfaces y al menos una unión literal.

## JavaScript avanzado 

La versión JavaScript utiliza diferentes conceptos de JavaScript avanzado:

* **Módulos ES:** `import` y `export` para separar los datos y la lógica.
* **Destructuring:** para obtener las características generadas.
* **Promesas:** para simular un proceso de fabricación asíncrono.
* **async/await:** para esperar la generación del monstruo sin bloquear el flujo.
* **Manejo de errores:** mediante `try/catch`.

## Migración a TypeScript

La versión TypeScript mantiene la lógica de la versión JavaScript, pero incorpora tipos para controlar la estructura de los datos.

Se utilizaron:

* `Color` como tipo personalizado para definir los colores permitidos.
* `Personality` como tipo personalizado para las personalidades disponibles.
* `Rarity` como tipo personalizado para los niveles de rareza.
* `Monster` como `interface` para definir la estructura completa de un monstruo.
* Uniones literales para limitar los valores permitidos en diferentes categorías.
* Una función genérica `getRandomItem<T>` para trabajar con diferentes tipos de datos.

TypeScript permitió detectar y prevenir valores que no pertenecen a las categorías definidas, haciendo que la estructura del programa sea más clara y mantenible.

## Comandos

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

Se realizaron commits separados para la implementación inicial en JavaScript y la posterior migración a TypeScript.

## Aprendizajes

Durante este proyecto aprendí a organizar mejor el código separándolo en diferentes módulos y a utilizar `Promise` y `async/await` para hacer que la generación del monstruo fuera asíncrona. También pude practicar el proceso de pasar un proyecto de JavaScript a TypeScript.

La migración me ayudó a entender mejor para qué sirven los tipos, las interfaces y las uniones literales, ya que permiten definir con más claridad qué datos puede tener cada monstruo y evitar errores mientras estoy programando.
