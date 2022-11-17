## Curso de IronHack

![IronHack Logo](./imgs/logo%20Iron.png)

<hr>
Quien soy?

Me llamo Facundo, soy de Argentina y hace un año me vine a vivir a Barcelona.
Estando acá comencé a estudiar programacion por mi cuenta. HAsta que un dia apliqué a IronHack para hacer el curso de FrontEnd intensivo

### Finalidad de este documento

<hr>
Este documento recopila notas de clases del curso IronHack

Las notas de cada día estan indicadas dentro de su seccion correspondiente con un archivo de numero creciente y key identificatoria.
Sumado a dichas secciones, en este documento podrás ver como añadir cambios en tu repositorio local.

- Seccion 1:
  - Tags
  - Tipografias
  - links
  - images
  - listas
  - layouts

### CLase 08 / 11

- Se finaliza con la seccion 1 de HTML:
  Temas añadidos a los anteriores:
  - Tablas
  - Inline vs block
  - Ejemplos semanticos

Finalizada seccion uno se comienza a ver CSS

<hr>

CSS: Comienza introduccion a CSS:

Temas vistos

- Selectores y pseudoselectores. Especificidad
- Las 3 formas de aplicar estilos

  - 1. En el head
  - 2. A traves de Link
  - 3. En cada etiqueta en particular

- Importacion de fonts
- Tipos de estilos:
  - borders
  - colores
  - padding and margin

### CLase 09 / 11

Temas del dia:

- Forkear documento y mantenerlo actualizado a la nube..

  - git push origin main (Sube)
  - git pull origin main (baja los cambios)

  - Formularios y botones

### CLase 10 / 11

- Se comienza el dia repasando laboratiorio clase previa.
  Temas vistos:
- Diseño responsive
  - Media queries @media
  - Flexbox
- Inline-Block
- Posicionamientos:
  - relativo
  - absoluto
-

### CLase 11/11

- Revisión Spotify webpage

#### Grid Basics:

    - diplay: grid.
      - grid-template-columns and grid-template-rows
      - grid-template-areas and grid-area

- Ejercicio practico: Instagram wepPage (uso combinado de Grid y FlexBox)

### Clase 14/11 **Semana 2**

Comienza seccion de Javascript

#### Temas del dia

- Basico del JS. Como linkear documentos html con JS

  - con script al final del body
  - Con Script src (similar a css)

- Tipo de datos
  - numeros
  - strings
  - Booleanos
  - null
  - undefined
  - symbolos - — that's guaranteed to be unique.
  -
- Variables
  - let
  - var
  - const
- Operadores:
  - Aritmeticos
  - Comparacion
  - Asignacion
  - Logicos
- Condicionales
  - if
  - else
  - else if

### Clase 15/11 **Semana 2**

#### Temas del dia

- Switch conditional

  - Simple Case
  - Multiple Case
  - La importancia del Break

- Funciones:

  1. Funciones simples
  2. Funciones con parámetros
  3. Funciones tipo flecha

  - Invocar a la funcion
  - return dentro de funcion ()

- Loops:

  1. Ciclo for
  2. Ciclo While

- Metodos de Arrays:
  1. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

### Clase 15/11 **Semana 2**

#### Temas del dia: DOM-Manipulation

- Acceso a elementos del DOM

  - getElementById() Method :
    - console.log(document.getElementById("wutang"));
  - getElementsByClassName() Method:
    - console.log(document.getElementsByClassName("wuTang"));
  - getElementsByTagName() Method:
    - console.log(document.getElementsByTagName("h5")[0])
  - querySelector() Method:
    1. console.log(document.querySelector("#query-selector"));
    2. console.log(document.querySelector(".hipHop"));
    3. console.log(document.querySelector("h5"));
    4. console.log(document.querySelector("body"));
    5. console.log(document.querySelector("#query-selector .hipHop .myLove"));

- Recorrer el nodo

  - parentNode:
    - console.log(document.querySelector("#second-child").parentNode);
    - console.log(document.querySelector("#second-child").parentElement);
  - childrenNodes:
    - console.log(document.querySelector("#traverse-document").children);
    - console.log(document.querySelector("#traverse-document").children[2]);
  - firstElementChild
  - lastElementChild: console.log(document.querySelector("#traverse-document").lastElementChild);
  - nextElementSibling
  - previousElementSibling

- Crear Elementos en el DOM

  - método createElement()
    - const createElement = document.createElement("div");
    - Verifico si se creo: console.log(createElement)

- Agegar mensaje con innerHTML:

  - createElement.innerHTML = "JS es demasiado cool!

- Anexar elemento creado en js al doc de HTML
  Se busca algun elemento del dom que este enm el body y se usa metodo appendChild
  - let parentElement = document.querySelector("#parent").appendChild(createElement);
  -
  -
- Reemplazar un elemento hijo

- Eliminar un elemento hijo

Asi como se puede acceder al DOM, crear y modificar nodos. Se puede acceder al estilo aplicado y personalizar la pagina a nuestro agrado
