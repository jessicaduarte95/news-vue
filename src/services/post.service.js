import BaseService from "@/config/base-service";

class PostSevice extends BaseService {
    constructor() {
        super(`post`)
    }
    createPost = (payload) => {
        const id = localStorage.getItem("userId");
        return this.post(payload, `register/${id}`)
    }
}

export default new PostSevice()