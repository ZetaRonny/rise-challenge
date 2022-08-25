const axios = require('axios'); // used for http requests
const express = require('express'); // our server 
const app = express(); 
//if env variables are used else default to 5000
const port = process.env.PORT || 5000; //Line 3

//shows us which port we are listening on 
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// our get request to an outbound source in this case an aws api gateway that returns our json values
app.get('/reports', (req, res) => { 
    //our http GET request
    axios.get(`https://93kv7gzta7.execute-api.us-east-2.amazonaws.com/dev`) // public api can be viewed in postman or browser as well
    .then(function (response) {
        //making computer readable during send
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        //log any errors
        console.log(error);
    });
}); 