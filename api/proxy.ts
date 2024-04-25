import axios from 'axios'
import converter from 'xml-js'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const apiUrl = process.env.VITE_API_BASE_URL
const apiKey = process.env.VITE_API_KEY

export default async function (req: VercelRequest, res: VercelResponse) {
  const sText = req.query.searchData
  const pageNo = req.query.pageNo
  const numOfRows = req.query.numOfRows

  const { data } = await axios.get(apiUrl!, {
    params: {
      apiKey,
      sType: 'sCntntsSj',
      sText,
      pageNo,
      numOfRows
    }
  })
  const xmlToJson = converter.xml2json(data)

  return res.status(200).json(xmlToJson)
}
