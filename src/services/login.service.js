import BaseService from "@/config/base-service";

class LoginService extends BaseService {
    constructor() {
        super(`login`)
    }
    login = async (payload) => {
        const data = await this.post(payload, '')
        if (data.data.result.token) {
            localStorage.setItem('authToken', data.data?.result?.token);
        }
        return data;
    }
}

export default new LoginService()