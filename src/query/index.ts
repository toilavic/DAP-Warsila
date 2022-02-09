import { flux, fluxDuration } from '@influxdata/influxdb-client'

import configs from '../configs'

const query = (start: string, measurement: string, field: string, topic: string, yieldFilter: string) => {
    
    const _start = fluxDuration(start)

    const fluxQuery = flux`from(bucket: ${configs.influxBucket}) |> range(start: ${_start})
                |> filter(fn: (r) => r["_measurement"] == ${measurement})
                |> filter(fn: (r) => r["_field"] == ${field})
                |> filter(fn: (r) => r["topic"] == ${topic})
                |> yield(name: ${yieldFilter})`

    return fluxQuery
}

export default query