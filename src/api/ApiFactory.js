import Axios from 'axios'

class ApiFactory {
    static async callAPI(constantApi, payload = {}, params = {}) {
        // Modify params if client want to get all data in one page
        if (params.size === 'all') {
            params.page = 0
            params.size = 5000
        }
        const url = `${constantApi['url']}?${objectToParams(params)}`
        return Axios({
            method: constantApi['method'],
            url: url,
            data: payload
        }).then(async res => {
            return res.data
        }, err => {
            throw err
        })
    }

}

const objectToParams = (obj) => Object.keys(obj).reduce(function (a, k) {
    if (obj) {
        a.push(`${k}=${obj[k]}`)
    }
    return a
}, []).join('&')

export default ApiFactory