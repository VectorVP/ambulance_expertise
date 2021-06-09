const express = require('express')
const router = express.Router()
const {protect, admin, doctor} = require('../middleware/authMiddleware')

const { getNews } = require('../controllers/homeController')
const { createProductReview } = require('../controllers/homeController')
const { createNew } = require('../controllers/homeController')

router.route('/')
    .get(getNews)
    .post(protect, createProductReview)
router.route('/create')
    .post(protect, doctor, createNew)

module.exports = router