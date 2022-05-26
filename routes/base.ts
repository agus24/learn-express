import { Express } from "express";
import PostController from "../app/controllers/PostController";

export default function route(app: Express) {
  app.get('/', PostController.index);
  app.post('/create', PostController.post);
  app.get('/find/:id', PostController.show);
}
