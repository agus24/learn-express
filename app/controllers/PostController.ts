import { Request, Response } from "express";
import Post from "../models/Post";
import { PostRequest } from "../requests/PostRequest";
import { errorSerializer, postSerializer } from "../utilities/serializer";

export default new class PostController {
  async index(req: Request, res: Response) {
    const posts = await Post.find();
    res.send(posts.map(post => postSerializer(post)))
  }

  async post(req: PostRequest, res: Response) {
    const post = new Post({
      title: req.body.title,
      content: req.body.content
    });
    post.save()
    res.send(postSerializer(post))
  }

  async show(req: Request, res: Response) {
    try {
      const post = <Post> await Post.findById(req.params.id)
      res.send(postSerializer(post))
    } catch (error: any) {
      res.status(500).send(errorSerializer(error))
    }
  }
}
