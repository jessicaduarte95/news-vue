import BaseService from "@/config/base-service";

class UsersSevice extends BaseService {
    constructor() {
        super(`user`)
    }
    createUser = (payload) => {
        return this.post(payload, `register`)
    }
}

export default new UsersSevice()