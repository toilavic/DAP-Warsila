import { socketPipelinesCreation } from "./socketPipelineCreation"
import logger from "../utils/logger"

export const socketPipelineSetup = (socket, measurement: string) => {
    socketPipelinesCreation(socket, 'getBearing00', measurement, undefined, 'Main bearing00')
    socketPipelinesCreation(socket, 'getBearing01', measurement, undefined, 'Main bearing01')
    socketPipelinesCreation(socket, 'getBearing02', measurement, undefined, 'Main bearing02')
    socketPipelinesCreation(socket, 'getBearing03', measurement, undefined, 'Main bearing03')
    socketPipelinesCreation(socket, 'getBearing04', measurement, undefined, 'Main bearing04')
    socketPipelinesCreation(socket, 'getBearing05', measurement, undefined, 'Main bearing05')
    socketPipelinesCreation(socket, 'getBearing06', measurement, undefined, 'Main bearing06')
    socketPipelinesCreation(socket, 'getBearing07', measurement, undefined, 'Main bearing07')
    socketPipelinesCreation(socket, 'getBearing08', measurement, undefined, 'Main bearing08')
    socketPipelinesCreation(socket, 'getBearing09', measurement, undefined, 'Main bearing09')
    socketPipelinesCreation(socket, 'getBearing10', measurement, undefined, 'Main bearing10')
    socketPipelinesCreation(socket, 'getBearing11', measurement, undefined, 'Main bearing11')
    
    logger.info(`Socket pipelines setup measurement: ${measurement} DONE`)
}