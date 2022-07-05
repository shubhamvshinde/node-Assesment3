//Que> Create two middlewares one should acceptable to all the routes present in backend application is containing and other should be applicable to any two spwcific routes.

//Meadleware :- 

// # Middleware are like general functions whitch takes in three parameters as request, response, next function.
// # These middleware sre used to execute some function before the response is send back to the client.
// It mostly gets used for the authentication, that before we send the response, we can authenticate if the API request is called from the client with proper user credentials or not.// # These middleware can apply to the whole application  level as well as on one perticular API route.
// next() function is very important, after the end of each middleware we should execute next function so that the program execution can move either to next middleware or to main route, if this function is not added then execution will not move forward.

const express = require ("express");

const app = express();
const port = 4040;

//In these we have written a function named middleware1, this is working as middleware, it has 3 arguments req, res, next app.use(middleware1), this will apply the middleware on the whole application.

const middleware1 = (req, res, next) => {
    console.log("Thise is Middleware 1");
    next();
}

const middleware2 = (req,res,next) => {
    console.log("Middleware 2 is used globally");
    next();
}

app.use(middleware2);//by using these line we use the middleware1 as globally means now it will applicable through out the server

//create app routes
// we use middleware 1 on only perticular server so that it can only be used at same server
app.get("/page1",middleware1,(req,res)=>{
    res.send("<h1>page 1 with middleware1</h1>")
})
app.get("/page2",middleware1,(req,res)=>{
    res.send("<h1>page 2 with middleware2</h1>")
})



app.get("/",(req,res)=>{
    res.send("<h1>Thise is main page with middleware2</h1>")
})
app.get("/page3",(req,res)=>{
    res.send("<h1>Page 3 with Middleware2</h1>")
})
app.get("/page4",(req,res)=>{
    res.send("<h1>Page 4 with Middleware2</h1>")
})
app.get("/page5",(req,res)=>{
    res.send("<h1>Page 5 with Middleware2</h1>")
})

app.listen(port,()=>{
    console.log(`server running at port $(port)`);
})