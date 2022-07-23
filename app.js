const express = require('express');



//Creating an instance of an express app.
const app = express();



//Register a view engine - Must be after express instance!
app.set('view engine','ejs')


//By default, it uses the /views folder for views. If I want to set another folder for them, then I'd use:
// app.set('views','folderName')


//Listen for requests
app.listen(3000);

app.get('/', (req,res)=>{
   res.render('index');

})

app.get('/about', (req,res)=>{
    res.render('about');

})




//This should go at the bottom.
//If none of the above matches the url, then it'll use this function:

app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{ root: __dirname})
})