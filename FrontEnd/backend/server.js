const express = require('express');
const app = express();
const port = 3001;
require('dotenv').config();

const cors = require('cors');

const UserRouter = require('./Routes/UserRouter');
const AdminRouter = require('./Routes/AdminRouter')

// const {Client} = pg;

// const client = new Client( {
//     user: 'postgres',
//     password: 'santo@27',
//     host: 'localhost',
//     port: 5432,
//     database: 'pec_hacks_2',
// });

// client.connect();

app.use(express.json());
app.use(cors());

app.use('/user/', UserRouter);

app.use('/admin/',AdminRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.post("/", (req, res) => {

//     res.send("Success");
// })

const startServer = async () => {
    // await connectDB();  
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};



startServer();
