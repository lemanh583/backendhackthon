const express = require('express')
const router = express.Router()
const newsController = require('../controller/newsController')
const eventController = require('../controller/eventController')

router.route('/news')
        .post(newsController.createNew)
        .get(newsController.getNews)

router.route('/news/:id')
        .put(newsController.updateNew)
        .delete(newsController.deleteNew)
        .get(newsController.findNew)

// router phần event

router.route('/event')
        .post(eventController.createEvent)
        .get(eventController.getEvent)

router.route('/event/:id')
        .put(eventController.updateEvent)
        .delete(eventController.deleteEvent)
        .get(eventController.findEvent)


module.exports = router