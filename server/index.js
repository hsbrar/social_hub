import express from 'express';
import bodyParser from 'body-parser';
import mangoose from 'mangoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());