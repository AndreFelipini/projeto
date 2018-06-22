const restful = require('node-restful')
const mongoose = restful.mongoose

const animalSchema = new mongoose.Schema({
  codigo: { type: Number, required: true },
  nome: { type: String, required: [true, 'Informe o nome do animal'] },
  peso: { type: Number, required: true },
  sexo: { type: String, required: true, uppercase: true, enum: ['FEMININO', 'MASCULINO'] },
  estado: { type: String, required: false, uppercase: true, enum: ['FORTE', 'FRACO', 'DOENTE'] },
  preco: { type: Number, required: false }
})

const gadoSchema = new mongoose.Schema({
  nome: { type: String, required: [true, 'Informe o tipo do gado ou nome da Raça'] },
  animals: [animalSchema]
})

module.exports = restful.model('Gado', gadoSchema)
