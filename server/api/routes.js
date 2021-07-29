const router = require('express').Router()
const Content = require('../models/content')



router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
  })

router.get('/', async (req, res, next) => {
    try {
        const words = await Content.findAll()
        console.log("get route ran")
        res.json(words)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const word = await Content.findByPk(req.params.id)
        if(word) res.json(word)
        else res.sendStatus(404)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newWord = await Content.create(req.body)
        res.json(newWord)
    } catch (error) {
        next(error)
    }
})

module.exports = router

