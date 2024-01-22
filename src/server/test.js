import express from 'express'
import request from 'request'
import converter from 'xml-js'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()
const url = 'http://api.nongsaro.go.kr/service/prvateTherpy/prvateTherpyList'
const apikey = process.env.VITE_API_KEY

router.get('/', async (req, res) => {
  try {
    const pageNo = req.query.pageNo
    const numOfRows = req.query.numOfRows
    const apiUrl = `${url}?apiKey=${apikey}&pageNo=${pageNo}&numOfRows=${numOfRows}`
    request(
      {
        url: apiUrl,
        method: 'GET'
      },
      (error, response, body) => {
        const xmlToJson = converter.xml2json(body)
        res.send(xmlToJson)
      }
    )
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

export default router
