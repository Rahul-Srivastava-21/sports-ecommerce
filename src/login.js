const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {exec}=require('child_process');
const openModulePromise = import('open');

const app = express();
const ejs = require('ejs');

async function open(url) {
    const { default: openModule } = await openModulePromise;
    return openModule(url);
}

function calc(){
    return(
        `<div>
            <h1>MB</h1>
        </div>`
    );
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Mohithb88:masterblaster8@cluster0.b8lvpkg.mongodb.net/mydb");

const loginSchema = {
    name: String,
    email: String,
    phno: String,
    password: String
}

const data = mongoose.model('notes', loginSchema);

app.get('/', async (req, res) => {
    try {
        const note = await data.find({}).select('name email -_id');
        console.log(note);
        res.render("login.ejs", {
            user: note
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/process', async (req, res) => {
    console.log("post");
    const userInput1 = req.body.input1;
    const userInput2 = req.body.input2;
    console.log("before");
    const action = req.body.action;
    console.log("action");

    try {
        const matchingUser = await data.findOne({
                email: userInput1
        });

        const pass = await data.findOne({
            password: userInput2
        });

        if (action === 'search') {
            if (matchingUser && pass) {
                console.log("user found");
                const cal = calc();
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
            } else {
                console.log('User not found');
                res.send('User not found');
            }
        } else if (action === 'register') {
            const child = exec('node signup.js');
            await open(`http://localhost:5500`);

            child.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });

            child.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
            });

            child.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
            });
            // Perform actions for the "Register" button click
            // Modify this part according to your registration logic
        } else {
            console.log('Invalid action');
            res.status(400).send('Invalid action');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(5000, function () {
    console.log('server is running in 5000');
});
