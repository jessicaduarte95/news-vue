import BaseService from "@/config/base-service";

class AuthService extends BaseService {
    constructor() {
        super(`auth`)
        this.intervalId = null
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
        clearInterval(this.intervalId);
        this.intervalId = setInterval(async () => {
            try {
                const userId = localStorage.getItem("userId");
                await this.refreshAccessToken(userId);
            } catch (error) {
                console.error('Failed to refresh access token:', error);
            }
        }, 10 * 60 * 1000);
    }
    stopRefreshTokenTimer = () => {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

export default new AuthService()