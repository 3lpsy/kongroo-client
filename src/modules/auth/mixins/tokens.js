
import jwtDecode from 'jwt-decode';

export default {
    computed: {
        tokens() {
            let stringify = window.localStorage.getItem('tokens');
            if (! stringify) {
                return [];
            }

            let tokens = JSON.parse(stringify);
            return tokens.map((token) => {
                return jwtDecode(token);
            })
        }
    }
}
