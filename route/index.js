const express = require('express')
const router = express.Router()
const newsController = require('../controller/newsController')
const eventController = require('../controller/eventController')
const urgentController = require('../controller/urgentController')

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

// router phần urgent

router.route('/urgent')
        .post(urgentController.createUrgent)
        .get(urgentController.getUrgents)

router.route('/urgent/:id')
        .put(urgentController.updateUrgent)
        .delete(urgentController.deleteUrgent)
        .get(urgentController.findUrgent)


module.exports = router