class AuthenticationService {
    signOut() {
        // localStorage.removeItem("user");
        localStorage.clear();
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthenticationService();