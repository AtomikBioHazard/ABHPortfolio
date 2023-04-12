const express = require('express')
const router = express.Router()
const fetch = require('cross-fetch');
const Project = require('../models/Project')

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://codesandbox.io/api/v1/sandboxes/oxuhz/data')
    const data = await response.json()
    res.json(data.modules)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error retrieving project data')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const response = await fetch('https://codesandbox.io/api/v1/sandboxes/oxuhz/data')
    const data = await response.json()
    const project = data.modules.find(module => module.id == req.params.id)
    if (!project) {
      return res.status(400).json({msg: 'Project not found'})
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router