import { posts } from "./dummy.js"
import { paginateResult } from "./utils.js";

const PostAPI = (app) => {
  
  // GET ALL POSTS
  app.get('/posts', paginateResult(posts), (req, res) => {
    res.json(res.paginatedResult);
  });
}

export default PostAPI;