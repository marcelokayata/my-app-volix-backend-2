const  {BadRequestError} = require('../errors');
const getAllJobs = (req, res) => {
  // Lógica para obtener todos los trabajos aquí
  res.send("All Jobs");
};

const getJob = (req, res) => {
  // Lógica para obtener un trabajo específico aquí
  const { id } = req.params;
  if (id == '123') {
    throw new BadRequestError('ID can not be 123');
  }
  res.send(`Single Job`);
  console.log(`Job ID aqui: ${id}`);
};

const createJob = (req, res) => {
  // Lógica para crear un nuevo trabajo aquí
  res.send("Create Job");
};

const updateJob = (req, res) => {
  // Lógica para actualizar un trabajo existente aquí
  res.send("Update Job");
};

const deleteJob = (req, res) => {
  // Lógica para eliminar un trabajo aquí
  res.send("Delete Job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
