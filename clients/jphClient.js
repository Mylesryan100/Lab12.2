const axios = require('axios');



const jphClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

// Add a request interceptor to our instance
jphClient.interceptors.request.use(config => {
  // This function runs before any request is sent using githubClient
  console.log(`Sending request to: ${config.baseURL}${config.url}`);
  // You must always return the config object, otherwise the request will fail
  return config;
}, error => {
  // Handle request error
  return Promise.reject(error);
});

// Add a request interceptor to our instance
jphClient.interceptors.request.use(config => {
  // This function runs before any request is sent using githubClient
  console.log(`Sending request to: ${config.baseURL}${config.url}`);
  // You must always return the config object, otherwise the request will fail
  return config;
}, error => {
  // Handle request error
  return Promise.reject(error);
});




module.exports = jphClient