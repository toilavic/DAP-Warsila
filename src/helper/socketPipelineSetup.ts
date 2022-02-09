import { socketPipelinesCreation } from "./socketPipelineCreation"
import logger from "../utils/logger"

export const socketPipelineSetup = (socket, measurement: string, timeToGetDataFrom: string) => {
    socketPipelinesCreation(socket, 'getBearing00', measurement, undefined, 'Main bearing00', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing01', measurement, undefined, 'Main bearing01', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing02', measurement, undefined, 'Main bearing02', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing03', measurement, undefined, 'Main bearing03', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing04', measurement, undefined, 'Main bearing04', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing05', measurement, undefined, 'Main bearing05', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing06', measurement, undefined, 'Main bearing06', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing07', measurement, undefined, 'Main bearing07', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing08', measurement, undefined, 'Main bearing08', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing09', measurement, undefined, 'Main bearing09', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing10', measurement, undefined, 'Main bearing10', timeToGetDataFrom)
    socketPipelinesCreation(socket, 'getBearing11', measurement, undefined, 'Main bearing11', timeToGetDataFrom)
    
    logger.info(`Socket pipelines setup measurement: ${measurement} DONE`)
}