# code-verifier-backend
Node Express project - backend

Dependencies
 "dotenv": "^16.0.3", --> Es un modulo que nos permite cargar las variables de entorno almacenadas en el archivo .env
 "express": "^4.18.2" --> Es un modulo que nos permite crear la infraestructura de nuestra API.

DevDependencies
  "devDependencies": {
    "concurrently": "^7.5.0", --> Permite lanzar varias líneas de comando
    "eslint": "^8.26.0", --> Analiza sintácticamente nuestro código detectando los errores del mismo
    "jest": "^29.2.2", --> Permite realizar test al código que subimos en nuestro proyecto
    "nodemon": "^2.0.20", --> Este módulo nos permite crear un demonio sobre nuestro proyecto para no tener que estar reiniciandolo en cada unos de los cambios que realicemos en nuetro proyecto
    "ts-jest": "^29.0.3", --> permite realizar test en projectos escritos en TS
  }

Scripts
    "build": "npx tsc", --> crea el directorio dist con el lenguaje javascript ya transpilado del TypeScript
    "start": "node dist/index.js", --> ejecuta el archivo index.js como si fuese en el entorno de producción
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"", --> ejecuta varias líneas de comandos entre ellas se encuentra la generación del directorio dist con la última versión de código y posteriormente crea un demonio con nodemon para no tener que ejecutar cada vez el servidor cada vez que hagamos una nueva modificación.
    "test": "jest", -> realiza los test configurados y reporta un log mostrando los resultados del mismo.
    "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve" --> ejecuta los test y mediante coverage podremos ver la parte de código que tenemos cubierta por test y si realmente los cumple, tambien nos despliega en otro puerto diferente a nuestro servidor principal un punto de entrada para poder ver (una vez configurado) los test y el coverage de los mismos


.env 

En el archivo .env tendremos que disponer de:

PORT=8000 --> O indicar el puerto donde queremos que se ejecute nuestro servidor.

