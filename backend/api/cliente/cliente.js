const restful = require('node-restful')
const mongoose = restful.mongoose

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  pessoa: { type: String, required: [true, 'Informe PF ou PJ'], uppercase: true, enum: ['PF', 'PJ'] },
  cpf: { type: Number, required: true },
  email: { type: String, required: false },
  telefone: { type: Number, required: false }
})

module.exports = restful.model('Cliente', clienteSchema)
