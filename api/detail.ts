import axios from 'axios'
import converter from 'xml-js'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const { VITE_API_BASE_URL_DETAIL, VITE_API_KEY } = process.env

export default async function (req: VercelRequest, res: VercelResponse) {
  const cntntsNo = req.query.cntntsNo

  const { data } = await axios.get(VITE_API_BASE_URL_DETAIL!, {
    params: {
      apiKey: VITE_API_KEY,
      cntntsNo
    }
  })
  const xmlToJson = converter.xml2json(data)

  res.setHeader('Content-Type', 'application/json')
  res.send(xmlToJson)
}
