import Axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8080/'

export default {
    get(url) {
        return new Promise((resolve, reject) => {
            Axios(
                {
                    method: 'get',
                    url: `${baseUrl}${url}`,
                    headers: {
                        'content-type': 'application/json',
                        'accept-language': 'en-US,en;q=0.9'
                    }
                }
            )
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        }
        )
    }
}