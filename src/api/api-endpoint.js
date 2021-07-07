export const HttpMethod = Object.freeze({
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
    POST: 'POST'
})
const VERSION = 'api/v1'
const API_DOMAIN = process.env.VUE_APP_API

export const ConstantTableEndPoint = Object.freeze({
    USER: 'user'
})

export const API_ENDPOINTS = Object.freeze({
    USER: {
        CHECK_LOGIN: {
            url: `${API_DOMAIN}/${VERSION}/${ConstantTableEndPoint.USER}`,
            method: HttpMethod.GET
        }
    }
})