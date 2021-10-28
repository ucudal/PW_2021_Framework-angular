# AngularWeb
## Out-of-the-box
Angular es un framework multiplataforma orientado a web, mobile web, native mobile y native desktop. La idea de angular es crear aplicaciones de una sola página donde lo que va cambiando son sus componentes. A su vez un componente puede estar compuesto de varios componentes generando un flujo de navegación.
Las aplicaciones de una sola página se caracterizan por hacer uso del desacoplamiento MVC donde cada vista es un bloque parcial donde se obtienen o ingresan datos al modelo o se actualizan individualmente. Esto tiene como consecuencia que no sea necesario que el servidor nos devuelva toda la página entera para hacer un cambio, como se hacía antaño.
Angular está orientado a ser simple y brindar herramientas para automatizar tareas rutinarias.
El CLI de angular es una interfaz de línea de comando que se usa para inicializar, desarrollar, soportar y mantener aplicaciones de angular desde una consola.
Una de las ventajas del CLI es la automatización de cosas, para crear un proyecto basta con ejecutar
ng new (nombre)
Y el CLI crea una carpeta con un proyecto base con angular instalado, no es necesario hacer nada más! También existen comandos para crear componentes, modelos, servicios, tests entre otros.



## Framework o librería:
Angular es sin lugar a dudas un ejemplo de framework. Desde que creamos un proyecto con Angular este nos resuelve el problema de la estructura del mismo, instala typescript en el proyecto, contiene módulos para resolver problemas como las llamadas http, el routing de la aplicación, establecer un patrón de inyección de dependencias entre otros problemas del tipo de aplicaciones para el cual está orientado. 
Además de esto el framework inserta flujo en las aplicaciones a través de propiedades de los elementos html específicas de angular, integración con typescript automática de cada componente y un sistema de output/input de los componentes que hace que puedan tomar información como parámetro y mandar información a su/sus componente/es padre levantando un evento. 
### Algunas de las propiedades de elementos usadas en html:
- *ngIf(expresión): De utilizarse en un elemento html este se mostrará solamente si la expresión toma valor verdadero. Esta expresión se debe evaluar con variables o un método que esté en el archivo typescript correspondiente al componente. Ejemplo: <label *ngIf=”this.mostrarLabel” > Holis Mundo </label>.
- *ngFor: Sirve para iterar un array de objetos y generar elementos html a través de los datos que contienen. Esto sirve para generar listas dinámicas describiendo un solo ítem de una lista. Ejemplo: <label *ngFor="let company of companies; index as i;"> company.name </label>
- [ngStyle] permite evaluar una o más expresiones booleanas del typescript del componente para aplicar uno o varios estilos al elemento html. Por ejemplo <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
- [ngClass] es similar a ngStyle pero en este caso sirve para aplicar una clase sobre el elemento y no un solo estilo. Por ejemplo: <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element> en este caso se usa la sintaxis  con varias clases.

