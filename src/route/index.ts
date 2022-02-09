import express, {Request, Response} from 'express'
import logger from '../utils/logger'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    const whatToSend = process.env.NODE_ENV === 'production' ? 'https://wui.nome.fi' : 'http://localhost:3000'
    res.send(whatToSend)
})

router.get('/get_settings', (req: Request, res: Response) => {
    res.status(200).json({
        timeoutDataRenewal: req.app.locals.timeoutDataRenewal,
        availableMeasurements: req.app.locals.availableMeasurements,
        measurement: req.app.locals.measurement,
    })
})

router.post('/change_settings', (req: Request, res: Response) => {
    if (req.body) {
       if (req.body.timeoutDataRenewal) req.app.locals.timeoutDataRenewal = req.body.timeoutDataRenewal
       if (req.body.measurement) req.app.locals.measurement = req.body.measurement
       if (req.body.timeToGetDataFrom) req.app.locals.timeToGetDataFrom = req.body.timeToGetDataFrom
       logger.info(`Inserted local setting OK with timeoutDataRenewal: ${req.app.locals.timeoutDataRenewal}, measurement: ${req.app.locals.measurement}, and timeToGetDataFrom: ${req.app.locals.timeToGetDataFrom}`) 
       res.status(200).send('Inserted!')
    } else res.status(400).send('Invalid request!')
})

export default router