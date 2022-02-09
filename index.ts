import express from 'express'
import 'dotenv/config'
import * as http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import bodyParser from 'body-parser'

// Own modules
import configs from './src/configs'
import logger from './src/utils/logger'
import { socketPipelineSetup } from './src/helper/socketPipelineSetup'
import router from './src/route'

// To do: Setup clustering app ?

// Setup
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configs variables
app.locals.timeoutDataRenewal = 30000
app.locals.measurement = 'data'
app.locals.availableMeasurements = JSON.parse(process.env.AVAILABLE_MEASUREMENTS)

const serverSocket = http.createServer(app)
// Socket IO
const io = new Server(serverSocket, {
	cors: {
		origin: process.env.NODE_ENV === 'production' ? 'https://wui.nome.fi' : 'http://localhost:3000',
		methods: ["GET", "POST"]
	}
})

let interval
io.on("connection", (socket) => {
	logger.info("Socket connect successfully !")

	socketPipelineSetup(socket, app.locals.measurement)
	
	if (interval) clearInterval(interval)
	// Todo: Set time our API setting for user
	interval = setInterval(() => {
		socketPipelineSetup(socket, app.locals.measurement)
	}, app.locals.timeoutDataRenewal)
	socket.on("disconnect", () => {
		logger.info("Client disconnected")
		clearInterval(interval)
	})
})

app.use(router)

serverSocket.listen(configs.port || 4000, () => {
	logger.info(`Server is running at https://localhost:${configs.port}`)
})