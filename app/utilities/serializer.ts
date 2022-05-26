import Post from "../models/Post";

const env = process.env

export function baseSerializer(json: Object = {}, message: string = '') {
  return {
    data: json,
    message: message
  }
}

export function errorSerializer(error: any) {
  return baseSerializer({}, env.APP_ENV == 'local' ? error.message : "something went wrong")
}

export function postSerializer(post: Post) {
  return baseSerializer({
    id: post._id,
    title: post.title,
    content: post.content
  })
}
