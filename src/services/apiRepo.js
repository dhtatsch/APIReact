import axios from 'axios';

const apiRepo = axios.create({
    baseURL: "https://api.github.com/users/dhtatsch/repos"
});

export default apiRepo;
