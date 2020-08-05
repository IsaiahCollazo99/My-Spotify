export const apiURL = () => {
    return window.location.hostname === "localhost" ?
    "http://localhost:8888" : "https://my-spotify-app-backend.herokuapp.com";
}