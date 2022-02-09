import express, {Request, Response} from 'express'
import logger from '../utils/logger'

const router = express.Router()

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
       logger.info(`Inserted local setting OK with timeoutDataRenewal: ${req.app.locals.timeoutDataRenewal} and measurement: ${req.app.locals.measurement}`) 
       res.status(200).send('Inserted!')
    } else res.status(400).send('Invalid request!')
})

export default router