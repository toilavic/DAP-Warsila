import query from "../query"
import { InfluxDB, FluxTableMetaData } from '@influxdata/influxdb-client'
import logger from "../utils/logger"

import configs from "../configs"

const queryApi = new InfluxDB({ url: configs.influxURL, token: configs.influxToken }).getQueryApi(configs.influxOrg)

export const socketPipelinesCreation = (socketServer, socketName, measurement?: string, field?: string, topic?: string, timeToGetDataFrom?: string) => {
    const _measurement = measurement || 'data'
	const _field = field || 'val' // val 
	let response
	let result = []

	// Todo: API to change the query params? power or speed, val, avg.....
 	queryApi.queryRows(query(timeToGetDataFrom, _measurement, _field, topic, 'mean'), {
		next(row: string[], tableMeta: FluxTableMetaData) {
			result.push(tableMeta.toObject(row))
			response = result
		},
		error(error) {
			logger.error(error)
		},
		complete() {
			socketServer.emit(socketName, response)
			result = []
		}
	})
}
