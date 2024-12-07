import { http } from './http'

class BaseService {
    constructor(resource) {
        this.http = http;
        this.resource = resource
    }

    get(params, config) {
        let request = this.resource
        let options

        if (typeof params === 'string' || typeof params === 'number') {
            request = `${this.resource}/${params}`
            options = config
        } else {
            request = params
        }

        return http.get(request, options)
    }

    post(body, route, config) {
        let resource = this.resource

        resource = `${this.resource}/${route}`

        return http.post(resource, body, config)
    }

    put() {

    }

    delete(params) {
        let request = this.resource
        let options

        if (typeof params === 'string' || typeof params === 'number') {
            request = `${this.resource}/${params}`
        }

        return http.delete(request, options)
    }
}

export default BaseService
