import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose"
import Post from './app/models/Post';
import { PostRequest } from './app/requests/PostRequest';
import route from './routes/base';

dotenv.config();

const app: Express = express();
const env = process.env;

app.use(express.json())
app.use(express.urlencoded())

route(app)

mongoose.connect(`mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_DATABASE}`)
  .then(() => {
    app.listen(env.APP_PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${env.APP_PORT}`);
    });          
  }).catch(err => {
    console.error(err)
  })
