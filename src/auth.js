export const isAuthenticated = () => {
    let status = (localStorage.getItem('authorization')) ? true : false;
    return status;
}