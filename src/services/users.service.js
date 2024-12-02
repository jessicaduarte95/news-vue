class UsersSevice {
    createUser = (payload) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Passou aqui", payload);
                resolve();
            }, 1000);
        });
    }
}

export default new UsersSevice()