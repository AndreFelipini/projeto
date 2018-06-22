const _ = require('lodash')
const Gado = require('../gado/gado')

// Mais uma função middleware
function getSummary(req, res) {
  Gado.aggregate({
    $project: {animal: {$sum: "$animals.preco"}}
  }, {
    $group: {_id: null, animal: {$sum: "$animal"}}
  }, {
    $project: {_id: 0, animal: 1}
  }, function(error, result) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(_.defaults(result[0], {animal: 0}))
    }
  })
}

module.exports = { getSummary }
