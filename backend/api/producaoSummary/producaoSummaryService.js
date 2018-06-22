const _ = require('lodash')
const Producao = require('../producao/producao')

// Mais uma função middleware
function getSummary(req, res) {
  Producao.aggregate({
    $project: {produzido: {$sum: "produzidos.quantidade"}, demanda: {$sum: "demandas.quantidade"}}
  }, {
    $group: {_id: null, produzido: {$sum: "produzido"}, demanda: {$sum: "demanda"}}
  }, {
    $project: {_id: 0, produzido: 1, demanda: 1}
  }, function(error, result) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(_.defaults(result[0], {produzido: 0, demanda: 0}))
    }
  })
}

module.exports = { getSummary }
