import { Request } from "express";

export interface PostRequest extends Request {
  body: {
    title: string,
    content: string
  }
}
