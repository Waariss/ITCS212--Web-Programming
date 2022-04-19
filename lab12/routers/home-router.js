const express = require('express');
const home = express.Router()

const ReminderModel = require('../models/reminder-model').ReminderModel
const reminder = new ReminderModel()

home.get('/', async function (req, res) {
    const results = await reminder.getRemiders()
    res.render('homepage', { reminders: results[0] })
})

module.exports = home;