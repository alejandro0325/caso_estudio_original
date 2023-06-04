const express = require('express');
const cluster = require('cluster');
const os = require('os');
const pid = process.pid;
require('./database');

const app = express();
app.use(express.json());

const tipoProyectoRoutes = require('./routes/tipoProyectoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const universidadRoutes = require('./routes/universidadRoutes');
const etapaRoutes = require('./routes/etapaRoutes');
const proyectoRoutes = require('./routes/proyectoRoutes');

// Rutas para los módulos
app.use('/tipo-proyecto', tipoProyectoRoutes);
app.use('/cliente', clienteRoutes);
app.use('/universidad', universidadRoutes);
app.use('/etapa', etapaRoutes);
app.use('/proyecto', proyectoRoutes);

const clienteController = require('./controllers/clienteController');
const etapaController = require('./controllers/etapaController');
const proyectoController = require('./controllers/proyectoController');
const tipoProyectoController = require('./controllers/tipoProyectoController');
const universidadController = require('./controllers/universidadController');

app.get("/", (request, response) => {
  response.send("Proyecto en Ejecución");
});

//CRUD CLIENTE
app.get("/cliente", async (request, response) => {
  try {
    const objeto = await clienteController.obtenerClientes(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al Procesar la Solicitud' });
  }
});

app.post("/cliente", async (request, response) => {
  try {
    const objeto = await clienteController.crearCliente(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al obtener los objetos' });
  }
});

app.put('/cliente/:id', async (req, res) => {
  try {
    await clienteController.actualizarCliente(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el objeto' });
  }
});

app.delete('/cliente/:id', async (req, res) => {
  try {
    await clienteController.eliminarCliente(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el objeto' });
  }
});

//CRUD ETAPA
app.get("/etapa", async (request, response) => {
  try {
    const objeto = await etapaController.obtenerEtapas(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al Procesar la Solicitud' });
  }
});

app.post("/etapa", async (request, response) => {
  try {
    const objeto = await etapaController.nuevaEtapa(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al obtener los objetos' });
  }
});

app.put('/etapa/:id', async (req, res) => {
  try {
    await etapaController.actualizarEtapa(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el objeto' });
  }
});

app.delete('/etapa/:id', async (req, res) => {
  try {
    await etapaController.eliminarEtapa(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el objeto' });
  }
});

//CRUD PROYECTO
app.get("/proyecto", async (request, response) => {
  try {
    const objeto = await proyectoController.obtenerProyectos(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al Procesar la Solicitud' });
  }
});

app.post("/proyecto", async (request, response) => {
  try {
    const objeto = await proyectoController.crearProyecto(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al obtener los objetos' });
  }
});

app.put('/proyecto/:id', async (req, res) => {
  try {
    await proyectoController.actualizarProyecto(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el objeto' });
  }
});

app.delete('/proyecto/:id', async (req, res) => {
  try {
    await proyectoController.eliminarProyecto(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el objeto' });
  }
});

//CRUD TIPO PROYECTO
app.get("/tipo-proyecto", async (request, response) => {
  try {
    const objeto = await tipoProyectoController.obtenerTiposProyecto(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al Procesar la Solicitud' });
  }
});

app.post("/tipo-proyecto", async (request, response) => {
  try {
    const objeto = await tipoProyectoController.crearTipoProyecto(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al obtener los objetos' });
  }
});

app.put('/tipo-proyecto/:id', async (req, res) => {
  try {
    objeto = await tipoProyectoController.actualizarTipoProyecto(req, res);

  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el objeto' });
  }
});

app.delete('/tipo-proyecto/:id', async (req, res) => {
  try {
    objeto = await tipoProyectoController.eliminarTipoProyecto(req, res);

  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el objeto' });
  }
});

//CRUD UNIVERSIDAD
app.get("/universidad", async (request, response) => {
  try {
    const objeto = await universidadController.obtenerUniversidades(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al Procesar la Solicitud' });
  }
});

app.post("/universidad", async (request, response) => {
  try {
    const objeto = await universidadController.crearUniversidad(request, response);
    response.json(objeto);
  } catch (error) {
    response.status(500).json({ error: 'Error al obtener los objetos' });
  }
});

app.put('/universidad/:id', async (req, res) => {
  try {
    await universidadController.actualizarUniversidad(req, res);

  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el objeto' });
  }
});

app.delete('/universidad/:id', async (req, res) => {
  try {
    await universidadController.eliminarUniversidad(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el objeto' });
  }
});


//Ponemos la aplicacion en escucha sin escalarse
//app.listen(6000, () => {
//  console.log('Servidor en ejecución en el puerto 6000');
//});

//Ponemos la aplicacion en escucha escalandose
if (cluster.isMaster) {
  const cpus = os.cpus().length; //Aqui obtenemos la cantidad de cpus libres que hay en el equipo para por ahi lanzar el app

  console.log(`obteniendo ${cpus} CPUs`);

  for (let i = 0; i < cpus; i++) {
    cluster.fork(); //Se crea varias instancias por cada cpu
   // console.log(`Iniciando proceso ${pid}`);
  }
} else {
  app.listen(6000, () => {
    console.log('Servidor en ejecución en el puerto 6000');
  });
  console.log(`Iniciando proceso ${pid}`);
}