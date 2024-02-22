
export const authStatus = () => {
    return localStorage.getItem('authStatus') === 'true';
}
