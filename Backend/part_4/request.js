// http and https for request and responce
const http = require("http");
const https = require("https");
const axios = require("axios");
// Local domain
// Get method
const options = {
    hostname:"localhost",
    port: 3000,
    path: "/",
    method: "GET",
};
const req = http.request(options, (res) => {
   res.on("data", (data) =>{
   process.stdout.write(data);
   });
});
req.on("error",(error) => {
  console.log(error);
});
req.end();

// Public Domains
// GET Method
const options2 = {
    hostname:"jsonplaceholder.typicode.com",
    port: 443,
    path:"/users",
    method:"GET",
};
const req2 = https.request(options2, (res) => {
   res.on("data", (data) => {
   process.stdout.write(data);
   });
});
req2.on("error", (error) =>{
   console.log(error);
});
req2.end();

// Post Method
const options3 = {
    hostname: "jsonplaceholder.typicode.com",
    port: 443,
    path: "/users",
    method: "POST",
};
const req3 = https.request(options3,(res) => {
   res.on("data",(data) => {
   process.stdout.write(data);
   });
});
req3.on("error",(error) => {
   console.log(error);
});
const data = JSON.stringify({
    name:"Venkatesh",
});
req3.write(data);
req3.end();

// Put Method
const options4 = {
    hostname: "jsonplaceholder.typicode.com",
    port: 443,
    path: "/users/1",
    method: "PUT",
};
const req4 = https.request(options4,(res) => {
   res.on("data",(data) => {
   process.stdout.write(data);
   });
});
req4.on("error",(error) => {
   console.log(error);
});
const data2 = JSON.stringify({
    name:"Harish",
});
req4.write(data2);
req4.end();

// delete Method
const options5 = {
    hostname: "jsonplaceholder.typicode.com",
    port: 443,
    path: "/users/1",
    method: "DELETE",
};
const req5 = https.request(options5,(res) => {
   res.on("data",(data) => {
   process.stdout.write(data);
   });
});
req5.on("error",(error) => {
   console.log(error);
});

req5.write(data);
req5.end();

// we can send request using axios.

axios.post("https://jsonplaceholder.typicode.com/users",{
    name:"Harish",
})
.then((responce) => {
   console.log(responce.data);
})
.catch((error) => [
 console.log(error)
]);