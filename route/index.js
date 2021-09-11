const express = require('express')
const router = express.Router()
const newsController = require('../controller/newsController')

router.route('/news')
        .post(newsController.createNew)
        .get(newsController.getNews)

router.route('/news/:id')
        .put(newsController.updateNew)
        .delete(newsController.deleteNew)
        .get(newsController.findNew)



module.exports = router