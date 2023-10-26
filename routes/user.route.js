const express = require('express');
const router = express.Router();
const {} = require('../controller/user.controller');
const {} = require('../middleware/middleware');

router.get('/', Get);
router.post('/', Insert);
router.get('/:id', GetById);
router.put('/:id', Update);
router.delete('/:id', Delete);

module.exports = router;
