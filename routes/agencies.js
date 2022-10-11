const express = require('express');
const {
  getAgencies,
  getAgency,
  createAgency,
  updateAgency,
  deleteAgency
} = require('../controllers/agencies');

const router = express.Router();

router
  .route('/')
  .get(getAgencies)
  .post(createAgency);

router
  .route('/:id')
  .get(getAgency)
  .put(updateAgency)
  .delete(deleteAgency);

module.exports = router;