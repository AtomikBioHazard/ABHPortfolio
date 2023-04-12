const fetch = require('node-fetch')

exports.getProjects = async (req, res) => {
  try {
    const response = await fetch('https://codesandbox.io/api/v1/sandboxes/4j1xy')
    const data = await response.json()
    const projects = data.modules

    return res.json(projects)
  } catch (error) {
    return res.status(400).json({message: 'Server Error'})
  }
}

exports.getProjectById = async (req, res) => {
  const { id } = req.params
  
  try {
    const response = await fetch('https://codesandbox.io/api/v1/sandboxes/4j1xy/module/${id}')
    const data = await response.json()

    return res.json(data)
  } catch (error) {
    return res.status(500).json({message: 'Server Error'})
  }
}

module.exports = {getProjects, getProjectById}
