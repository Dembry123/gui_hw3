import axios from "axios";
const endpoint = "https://api.johnlawrimore.com/store/products";
const headers = { "Authorization" : "dembry"}
const getProductById = (productId) => new Promise((resolve,reject)=> {
    axios.get(`${endpoint}/${productId}`, {headers}).then(response => {
        resolve(response.data);
    }).catch(error => {
        reject(error);
    });
});
export const API = {getProductById};