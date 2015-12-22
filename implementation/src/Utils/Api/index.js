
class Api {
    constructor(url) {
    	return fetch(url).then((response) => {
            return response.json();
        }).catch((err) => {
	       return err;
        });
    }
}

export default Api;