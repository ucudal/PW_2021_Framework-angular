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


## Nivel de mantenimiento y comunidad
### Versiones 
La primera versión de Angular es lanzada en 2010 con el nombre “Angular JS”, a medida que se populariza los desarrolladores se dan cuanta de que la base de angularjs no era eficiente para aplicaciones muy compejas y escalables por lo que deciden hacer una reingenieria total del proyecto , es asi que se crea la segunda versión “Angular 2” que implicó reescribir prácticamente todo el código el cual hace hace uso de typescript, en este momento “Angular JS” y “Angular” en su versión 2, pasan a ser diferentes productos     

### Versión estable
La versión estable es v12.2.11 , los números de las versiones se dividen en “major.minor.patch” en este caso major version 12 , minor version 2 y patch level 11

### Major release  
Por lo general representan cambios significativos en las funcionalidades existentes asi como la inclusion de nuevas funcionalidades, en cuanto al mantenimiento de nuestras aplicaciones, normalmente se requieren actualizaciones e incluso refactorización del código existente 

### Minor release 
Son correcciones pequeñas que por lo general no necesitan mayores cambios en nuestros códigos

### Patch Level
Corrección de errores o pequeños cambios performantes

### Nuevas versiones
Para poder planear los mantenimientos y actualización de las aplicaciones se proporciona informacion detallada de los avances de las nuevas versiones, normalmente se espera que 2 veces al año se genere un Mayor Release y de 1 a 3 Minor Releases por cada uno de ellos, los Patch Release normalmente se generan semanalmente. 
En cuanto al soporte, Las Mayor releases son soportadas normalmente por 18 meses 

### Deprecation period
Cuando una función o Api queda obsoleta sigue estando disponible por las 2 siguientes Mayor Releases para permitir un periodo de actualización, en la siguiente Mayor Release las funciones y apis obsoletas serán removidas por lo que las aplicaciones antiguas dejarán de funcionar. Se puede acceder a los anuncios de las funciones o apis que serán marcadas como obsoletas en el archivo de Changelog.md https://github.com/angular/angular/blob/master/CHANGELOG.md

### Comunidades
Exite gran variedad de comunidades,oficialmente angular promociona varias de ellas como los hilos oficiales de reddit, angularcommunity.net, su canal oficial de youtube con mas de 100k de seguidores, guithub, etc 
El listado oficial se puede encontrar en https://angular.io/resources?category=community

##Curva de aprendizaje
Angular es un framework que lleva tiempo aprender, esto es ya que no es una librería como puede ser react sino que es un framework completo y por ende tiene muchos componentes de los cuales se tiene que aprender. Estos componentes son el uso de typescript que no mucha gente está acostumbrada, este contiene módulos ya existente para http y routing que cambian con las versiones de angular y hacen que dependiendo de en cual este como funciona y otros componentes que hacen que angular tenga una curva de aprendizaje empinada

### Algunos números con respecto a la actividad en github
* Watchers 3.2 k
* Stars 77.3 k
* Forks 20.3 k
* Commits más de 250 commits en el último mes 
* Contributors 1481
