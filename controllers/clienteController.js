const Cliente = require('../models/cliente');

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los clientes' });
  }
};

// Crear un nuevo cliente
const crearCliente = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const nuevoCliente = new Cliente({ nombre, email });
    await nuevoCliente.save();
    res.status(201).json({ mensaje: 'Cliente creado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el cliente' });
  }
};

// Actualizar un cliente
const actualizarCliente = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, email } = req.body;
    const clienteActualizado = await Cliente.findByIdAndUpdate(
      id,
      { nombre, email },
      { new: true }
    );
    if (!clienteActualizado) {
       res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }else{
      res.json(clienteActualizado);
    }
    
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el cliente' });
  }
};

// Eliminar un cliente
const eliminarCliente = async (req, res) => {
  try {
    const id = req.params.id;
    console.log('Id '+ req.params.id);
    const clienteEliminado = await Cliente.findByIdAndDelete(id);
    if (!clienteEliminado) {
     res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }else{
     res.status(200).json({ mensaje: 'Cliente eliminado correctamente' });
    }   
  } catch (error) {
    console.log('Error '+ error);
    res.status(500).json({ mensaje: 'Error al eliminar el cliente' });
  }
};

module.exports = {
  obtenerClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};
