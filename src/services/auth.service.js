import BaseService from "@/config/base-service";

class AuthService extends BaseService {
    constructor() {
        super(`auth`)
    }
    refreshAccessToken = async (userId) => {
        const payload = {
            userId
        }
        const data = await this.post(payload, 'refresh/token')
        if (data.data.result.token) {
            localStorage.setItem('authToken', data.data?.result?.token);
        }
        return data;
    }
    startRefreshTokenTimer = async () => {
        setInterval(async () => {
            try {
                const userId = localStorage.getItem("userId");
                console.log('userId: ', userId)
                await this.refreshAccessToken(userId);
            } catch (error) {
                console.error('Failed to refresh access token:', error);
            }
        }, 10 * 60 * 1000);
    }
}

export default new AuthService()