const Mision = require('../models/misionModel');

const controladorMision = {
  obtenerTodasMisiones: async (req, res) => {
    try {
      const misiones = Mision.obtenerMisiones();
      res.json(misiones);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener las misioness', error });
    }
  },

  obtenerMisionesPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const misiones =  Mision.obtenerMisionesId(id);
      if (!misiones) return res.status(404).json({ mensaje: 'mision no encontrada' });
      res.json(misiones);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener la mision', error });
    }
  },

  crearMision: async (req, res) => {
    const {nombre} = req.body;
    try {
      const nuevaMision = {nombre};
       Mision.crearMision(nuevaMision);
      res.status(201).json({ mensaje: 'Mision creada exitosamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear la Mision', error });
    }
  },

  actualizarMision: async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
      const misionActualizada = { nombre};
      Mision.actualizarMision(id, misionActualizada);
      res.json({ mensaje: 'mision actualizada exitosamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar la mision', error });
    }
  },

  eliminarMision: async (req, res) => {
    const { id } = req.params;
    try {
      Mision.eliminarMision(id);
      res.json({ mensaje: 'Mision eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar la Mision', error });
    }
  }
};

module.exports = controladorMision;
