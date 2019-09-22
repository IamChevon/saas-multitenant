import express from 'express';
import routeController from '../controllers/route'

const router = express.Router();

router.get('/', routeController.get);

module.exports = router;