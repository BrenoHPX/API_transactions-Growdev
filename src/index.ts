import express, { Express, Router } from 'express'
import router from './api_features/apiRoutes'

const server: Express = express()
server.use(express.json(), router)
server.listen(3001, () => {
	console.log('Server running...')
})
