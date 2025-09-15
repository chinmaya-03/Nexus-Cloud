require('dotenv').config()
const express = require('express')
const httpProxy = require('http-proxy')

const app = express()
const PORT = process.env.PORT || 8000

const BASE_PATH = process.env.BASE_PATH || 'https://nexus-cloud-outputs.s3.ap-south-1.amazonaws.com/__outputs'

const proxy = httpProxy.createProxy()

app.use((req, res) => {
    const hostname = req.hostname;
    const subdomain = hostname.split('.')[0];

    // Custom Domain - DB Query
    // DB Query = prisma.

    // kafka event page visit

    const id = process.env.PROJECT_ID || '52c49933-9e48-44d1-af87-056bcd6e7ae2'

    const resolvesTo = `${BASE_PATH}/${id}`

    return proxy.web(req, res, { target: resolvesTo, changeOrigin: true })

})

proxy.on('proxyReq', (proxyReq, req, res) => {
    const url = req.url;
    if (url === '/')
        proxyReq.path += 'index.html'

})

app.listen(PORT, () => console.log(`Reverse Proxy Running..${PORT}`))