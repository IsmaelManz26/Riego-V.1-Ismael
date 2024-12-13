import { Check } from './check.js';

// Variable de configuración
const useLocalJson = true; // Cambia esta variable a true para cargar desde el archivo JSON

const Cliente = {
  // Enviar datos al servidor
    send: (data) => {
        fetch('http://localhost:3000/api/items', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              console.log('Ítem creado:', data);
            })
            .catch(error => {
              console.error('Error al crear el ítem:', error);
            });
    },
    // Actualizar datos en el servidor
    update: (data) => {
        console.log(`Enviando actualización para ${data.name} con estado ${data.state ? 'ON' : 'OFF'}`);
        fetch(`http://localhost:3000/api/items/${data.name}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              console.log('Ítem actualizado:', data);
            })
            .catch(error => {
              console.error('Error al actualizar el ítem:', error);
            });
    },
     // Obtener datos de las válvulas
    fetchItems: () => {
        if (useLocalJson) {
            return fetch('valvulas.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => data.lista)
                .catch(error => {
                    console.error('Error al obtener los ítems desde el archivo JSON:', error);
                });
        } else {
            return fetch('http://localhost:3000/api/items')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .catch(error => {
                    console.error('Error al obtener los ítems desde el servidor:', error);
                });
        }
    }
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    if (useLocalJson) {
        Cliente.fetchItems().then(items => {
            const container = document.getElementById('container');
            items.forEach((item, index) => {
                const groupIndex = Math.floor(index / 2);
                let group = document.getElementById(`grupo${groupIndex + 1}`);
                if (!group) {
                    group = document.createElement('div');
                    group.classList.add('group');
                    group.id = `grupo${groupIndex + 1}`;
                    container.appendChild(group);
                }
                const check = new Check(group, Cliente);
                check.addCheck(item.name);
            });
        });
    //dependiendo si esta en true o false la variable para cargar los datos
    } else {
        const check1 = new Check(document.getElementById("grupo1"), Cliente);
        check1.addCheck("riego1");
        check1.addCheck("riego2");

        const check2 = new Check(document.getElementById("grupo2"), Cliente);
        check2.addCheck("riego1");
        check2.addCheck("riego2");

        const check3 = new Check(document.getElementById("grupo3"), Cliente);
        check3.addCheck("riego1");
        check3.addCheck("riego2");
    }
});