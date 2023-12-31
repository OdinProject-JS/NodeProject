const express=require("express")


const app=express();

app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");

})
app.get("/about",function(req,res){

    res.sendFile(__dirname+"/about.html");

})
app.get("/contact-me",function(req,res){

    res.sendFile(__dirname+"/contact-me.html");

})
app.use(function(req,res,next){

    res.status(404).sendFile(__dirname+"/404.html");

})

app.listen(8080,function(){
    console.log("Server is running on port 3000");
})