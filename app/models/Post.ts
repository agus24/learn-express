import { model } from "mongoose";
import { Schema } from "mongoose"

interface Post {
  _id?: string,
  title: string,
  content: string
}

export const postSchema = new Schema<Post>({
  title: { type: String, required: true },
  content: { type: String, required: true }
})

const Post = model<Post>('Post', postSchema)

export default Post
