
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const path=require("path");
const {exec}=require('child_process');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Mohithb88:masterblaster8@cluster0.b8lvpkg.mongodb.net/mydb",{useNewUrlParser:true},{useUnifiedTopology:true})

const notesSchema={
    name:String,
    email:String,
    phno:String,
    password:String
}

const Note=mongoose.model("Note",notesSchema);

app.get("/",function(req,res){
    const x="D:\\MOHITH-PES\\WebTech Project2\\my-project\\public\\signup.html";
    res.sendFile(x);
})

app.get("/login", function (req, res) {
    const loginPath = "D:\\MOHITH-PES\\WebTech Project2\\my-project\\src\\login.ejs";
    res.sendFile(loginPath);
});

app.post("/",function(req,res){
    let newNote=new Note({
        name:req.body.name,
        email:req.body.email,
        phno:req.body.phno,
        password:req.body.password
    });
    const note= newNote.save().then(x=>console.log(x)).catch(err=>console.log(err));

    const child = exec('npm start');

                child.stdout.on('data', (data) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code) => {
                    console.log(`child process exited with code ${code}`);
                });

})

app.listen(5500,function(){
    console.log("server is running on 5500");
})