import express from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import passport from 'passport';
import path from 'path';
import methodoveride from 'method-override';
import config from './config/config';
import fileupload from 'express-fileupload';

import v1 from './v1/routesFrontend/v1.routes';

const app = express();
const server = http.createServer(app);

// compress responses
app.use(morgan("dev"))
app.options('*', cors());
app.use(fileupload())

app.use(methodoveride())
// app.use(express.multiparty())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(passport.initialize());

console.log(">>>>>>>>__dirname",__dirname);
app.use('/', express.static(path.join(__dirname, 'public')))

// Database connection 'mongodb://paruser:D8kbt478eo5@192.53.121.26:12743/zensdb'
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>
    console.log('MongoDB successfully connected.',config.mongoURI)
).catch(err => console.log(err));

app.use("/v1", v1);

app.get('/', (req, res) => {
    return res.send("User Service Working")
})

server.listen(config.port, function () {
    console.log(`server is running on port ${config.port}`)
});