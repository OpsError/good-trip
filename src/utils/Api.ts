class Api {
    url: string;
    constructor( baseUrl: string ) {
        this.url = baseUrl;
    }

    _handleResponse(res: any) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error('Произошла ошибка'));
    }

    putHeaders() {
        const headers = {
            'Content-Type': 'application/json'
        }
        return headers;
    }

    getCities() {
        return fetch(`${this.url}/city`, {
            method: 'GET',
            headers: this.putHeaders(),
        })
        .then(this._handleResponse);
    }

    getCity(cityId: string) {
        return fetch(`${this.url}/city/${cityId}`, {
            method: 'GET',
            headers: this.putHeaders(),
        })
        .then(this._handleResponse);
    }

    // postPlace(info: any) {
    //     return fetch(`${this.url}/`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //         body: JSON.stringify(info)
    //     })
    //     .then(this._handleResponse);
    // }
}

// const api = new Api('https://652403bfea560a22a4e94195.mockapi.io/places');
const api = new Api('http://localhost:3001');


export default api;