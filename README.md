# AngularWeb



## Framework o librería:
Angular es sin lugar a dudas un ejemplo de framework. Desde que creamos un proyecto con Angular este nos resuelve el problema de la estructura del mismo, instala typescript en el proyecto, contiene módulos para resolver problemas como las llamadas http, el routing de la aplicación, establecer un patrón de inyección de dependencias entre otros problemas del tipo de aplicaciones para el cual está orientado. 
Además de esto el framework inserta flujo en las aplicaciones a través de propiedades de los elementos html específicas de angular, integración con typescript automática de cada componente y un sistema de output/input de los componentes que hace que puedan tomar información como parámetro y mandar información a su/sus componente/es padre levantando un evento. 
### Algunas de las propiedades de elementos usadas en html:
- *ngIf(expresión): De utilizarse en un elemento html este se mostrará solamente si la expresión toma valor verdadero. Esta expresión se debe evaluar con variables o un método que esté en el archivo typescript correspondiente al componente. Ejemplo: <label *ngIf=”this.mostrarLabel” > Holis Mundo </label>.
- *ngFor: Sirve para iterar un array de objetos y generar elementos html a través de los datos que contienen. Esto sirve para generar listas dinámicas describiendo un solo ítem de una lista. Ejemplo: <label *ngFor="let company of companies; index as i;"> company.name </label>
- [ngStyle] permite evaluar una o más expresiones booleanas del typescript del componente para aplicar uno o varios estilos al elemento html. Por ejemplo <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
- [ngClass] es similar a ngStyle pero en este caso sirve para aplicar una clase sobre el elemento y no un solo estilo. Por ejemplo: <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element> en este caso se usa la sintaxis  con varias clases.
