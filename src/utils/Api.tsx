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

    getPlaces() {
        return fetch(`${this.url}`, {
            method: 'GET',
            headers: this.putHeaders(),
        })
        .then(this._handleResponse);
    }
}

const api = new Api('https://652403bfea560a22a4e94195.mockapi.io/places');

export default api;