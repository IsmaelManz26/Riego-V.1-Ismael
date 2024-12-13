
# Proyecto de Gestión de Válvulas de Riego

Este proyecto es una aplicación web para gestionar válvulas de riego. La aplicación permite visualizar y controlar el estado de las válvulas a través de una interfaz web. Las válvulas pueden ser cargadas dinámicamente desde un archivo JSON o desde un servidor API-REST.

## Estructura del Proyecto

```
cliente/
  ├── css/
  │   └── styles.css
  ├── js/
  │   ├── check.js
  │   └── index.js
  ├── index.html
  └── valvulas.json
index.js
package.json
readme.md
```

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias del proyecto ejecutando el siguiente comando:

```sh
npm install
```

## Uso

### Servidor

Inicia el servidor ejecutando el siguiente comando:

```sh
node index.js
```

El servidor se ejecutará en [http://localhost:3000](http://localhost:3000).

### Cliente

Abre el archivo `cliente/index.html` en tu navegador web.

## Configuración

### Cargar Válvulas desde JSON o Servidor

En el archivo `cliente/js/index.js`, puedes configurar si las válvulas se cargan desde el archivo JSON o desde el servidor API-REST cambiando el valor de la variable `useLocalJson`.

```javascript
const useLocalJson = true; // Cambia a false para cargar desde el servidor
```

## Estructura de Archivos

- **index.js**: Este archivo contiene el código del servidor Express que maneja las solicitudes HTTP y proporciona una API REST para interactuar con los datos de las válvulas.

- **cliente/index.html**: Este archivo define la estructura de la página web y carga los archivos CSS y JavaScript necesarios.

- **cliente/css/styles.css**: Este archivo define los estilos para la interfaz de usuario, incluyendo los interruptores de las válvulas.

- **cliente/js/check.js**: Este archivo define la clase `Check` que maneja la creación y el comportamiento de los interruptores de las válvulas.

- **cliente/js/index.js**: Este archivo contiene el código JavaScript principal que inicializa los interruptores y define el objeto `Cliente` para enviar datos al servidor.

- **cliente/valvulas.json**: Este archivo contiene los datos de las válvulas en formato JSON. Se utiliza cuando `useLocalJson` está configurado en `true`.

## API REST

### Endpoints

- **Obtener todas las válvulas**: `GET /valvulas`
- **Crear una nueva válvula**: `POST /valvulas`
- **Actualizar el estado de una válvula**: `PUT /valvulas/:id`

### Ejemplo de Datos JSON

```json
{
    "lista": [
        { "name": "riego1", "state": false },
        { "name": "riego2", "state": false },
        { "name": "riego3", "state": false },
        { "name": "riego4", "state": false },
        { "name": "riego5", "state": false },
        { "name": "riego6", "state": false },
        { "name": "riego7", "state": false },
        { "name": "riego8", "state": false },
        { "name": "riego9", "state": false },
        { "name": "riego10", "state": false },
        { "name": "riego11", "state": false },
        { "name": "riego12", "state": false },
        { "name": "riego13", "state": false },
        { "name": "riego14", "state": false },
        { "name": "riego15", "state": false },
        { "name": "riego16", "state": false }
    ]
}
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para contribuir al proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.
