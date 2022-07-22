//This file creates a server without using Express, with just pure Nodejs code.


//REQUIRES
//https is to be able to make the server.
const http = require('http');

//fs is to access filesystem.
const fs = require('fs');



const server = http.createServer((req,res)=>{
        //To get request information (The one browser sends) use the req. object. To send a response use the res. object.
    console.log("request made");
    
    //Set header content
    res.setHeader('Content-Type','text/html');


    //Simple router with a switch

    //First I create a path pointing to the folder
    let path = "./views/";

    //then I add the switch to figure out what URL the user chooses and send it to the html file.
    switch(req.url){
        case "/":
        path += "index.html";
        //Devuelve el status code al browser
        res.statusCode = 200;
        break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
        break;
        case "/contact":
            path += "contact.html";
            res.statusCode = 200;
        break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            res.write("error");
            console.log(err);
            res.end();
        }else{
          res.write(data);
            res.end();
            //Could also be res.end(data) for only one file and remove res.write(data), if there is more than one, we use res.write(data) as many times as needed.
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log('Listening for requests on port 3000');
})