class GenUtil {
    static jwtToken = '';
    static getJWTToken() {
        return this.jwtToken || this.getCookie('jwtToken');
    }
    static clearJWTToken() {
        this.jwtToken = '';
        document.cookie = 'jwtToken=' + '; path=/';
    }
    static setCookie(name: string, value: string, days: number) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 7 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    static getCookie(name: string) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}
export default GenUtil;