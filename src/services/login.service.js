import BaseService from "@/config/base-service";

class LoginService extends BaseService {
    constructor() {
        super(`login`)
    }
    login = (payload) => {
        return this.post(payload, '')
    }
}

export default new LoginService()