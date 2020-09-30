var request = require('request-promise');
var cors = require('cors');
var express = requre('express');
var url = require("url");

var app = express();
var server = app.listen(9665, function(){
    console.log("PROXTY ACTIVATED");
    console.log('http://127.0.0.1:9665/fetchAPI?endpoint= <---- YOUR API------>');
})

app.use(cors());

app.get('/fetchAPI', fetchAPI);

function fetchAPI(req, res){
    try{
        let parameters = url.parse(req.url, true).query;
        for (keys in parameters){
            if (keys == 'endpoint'){
                continue;
            }else{
                parameters['endpoint'] += '&' + keys + '=' + parameters[keys];
            }

            request({
                method: 'GET',
                url: parameters['endpoint'],
                resolveWithFullResponse: true 
            }).then((r1) => {
                res.send(JSON.parse(t1.body));
            }).catch((error) => {
                console.log(error);
            })
        }
    }
    catch(error){
        console.log(error);
    }
}