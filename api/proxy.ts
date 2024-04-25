import axios from 'axios'
import converter from 'xml-js'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const { VITE_API_BASE_URL, VITE_API_KEY } = process.env

export default async function (req: VercelRequest, res: VercelResponse) {
  const sText = req.query.searchData
  const pageNo = req.query.pageNo
  const numOfRows = req.query.numOfRows

  const { data } = await axios.get(VITE_API_BASE_URL!, {
    params: {
      apiKey: VITE_API_KEY,
      sType: 'sCntntsSj',
      sText,
      pageNo,
      numOfRows
    }
  })
  const xmlToJson = converter.xml2json(data)

  res.setHeader('Content-Type', 'application/json')
  res.send(xmlToJson)
}
