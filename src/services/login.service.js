import BaseService from "@/config/base-service";

class LoginService extends BaseService {
    constructor() {
        super(`login`)
    }
    login = async (payload) => {
        const data = await this.post(payload, '')
        if (data.data.result) {
            localStorage.setItem('authToken', data.data?.result?.token);
            localStorage.setItem('userId', data.data?.result?.userId);
            localStorage.setItem('userName', data.data?.result?.name);
            localStorage.setItem('userActive', true);
        }
        return data;
    }
}

export default new LoginService()