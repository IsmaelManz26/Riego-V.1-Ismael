import express from 'express';
import cors from 'cors';

// Crear la aplicación de Express
const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(cors());
app.use(express.json());

// Datos iniciales de las válvulas
let datos = {
    lista: []
}

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a la REST API con Node.js y import!');
});

// Obtener todas las válvulas
app.get('/api/items', (req, res) => {    
    res.json(datos.lista);
});

// Crear una nueva válvula
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    console.log(`Llega ${newItem.name}`);
    newItem.id = Date.now();
    datos.lista.push(newItem);
    res.status(201).json(newItem);
});

// Actualizar el estado de una válvula
app.put('/api/items/:name', (req, res) => {
    const { name } = req.params;
    const { state } = req.body;
    console.log(`Actualizando ${name} a ${state ? 'ON' : 'OFF'}`);
    const item = datos.lista.find(item => item.name === name);
    if (item) {
        item.state = state;
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});