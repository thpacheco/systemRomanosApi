const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const agenda_controller = require('../controllers/agenda.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', agenda_controller.agenda_listar);

// router.get('/:id/resident', agenda_controller.resident_getResident);

router.post('/create', agenda_controller.agenda_salvar);

module.exports = router;