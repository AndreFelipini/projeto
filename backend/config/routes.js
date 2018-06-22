const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)

  //rotas da API producao
  const producaoService = require('../api/producao/producaoService')
  producaoService.register(router, '/producao')

  const producaoSummaryService = require('../api/producaoSummary/producaoSummaryService')
  router.route('/producaoSummary').get(producaoSummaryService.getSummary)

  // rotas da API gado
  const gadoService = require('../api/gado/gadoService')
  gadoService.register(router, '/gados')

  const gadoSummaryService = require('../api/gadoSummary/gadoSummaryService')
  router.route('/gadoSummary').get(gadoSummaryService.getSummary)

  // rotas da API
  const clienteService = require('../api/cliente/clienteService')
  clienteService.register(router, '/clientes')

  //const clienteSummaryService = require('../api/clienteSummary/clienteSummaryService')
  //router.route('/clienteSummary').get(clienteSummaryService.getSummary)

}
