const restful = require('node-restful')
const mongoose = restful.mongoose

const produzidoSchema = new mongoose.Schema({
  produto: {type: String, required: [true, 'Informe qual produto']},
  quantidade: {type: Number, min: 0, required: [true, 'Informe a Quantidade ou Peso']},
})

const demandaSchema = new mongoose.Schema({
  produto: {type: String, required: [true, 'Informe qual produto']},
  quantidade: {type: Number, min: 0, required: [true, 'Informe a Quantidade ou Peso']},
  status: { type: String, required: false, uppercase: true, enum: ['VENDIDO', 'AGENDADO']}
})

const producaoSchema = new mongoose.Schema({
  produto: {type: String, required: [true, 'Informe qual produto']},
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  produzidos: [produzidoSchema],
  demandas: [demandaSchema]
})

module.exports = restful.model('Producao', producaoSchema)

/*
*****************************************************************************************************************
*****************************************************************************************************************
*****************************************************************************************************************
*****************************************************************************************************************
*/

/*
const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
  status: { type: String, required: false, uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  credits: [creditSchema],
  debts: [debtSchema]
})
*/
