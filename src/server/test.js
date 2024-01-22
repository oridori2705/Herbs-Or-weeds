import express from 'express'
import converter from 'xml-js'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()
const router = express.Router()
const url = 'http://api.nongsaro.go.kr/service/prvateTherpy/prvateTherpyList'
const apiKey = process.env.VITE_API_KEY

router.get('/', async (req, res) => {
  try {
    const pageNo = req.query.pageNo
    const numOfRows = req.query.numOfRows

    const response = await axios.get(url, {
      params: {
        apiKey,
        pageNo,
        numOfRows
      }
    })
    const xmlToJson = converter.xml2json(response.data)
    res.send(xmlToJson)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

export default router
