import { users } from "./dummy.js"
import { paginateResult } from "./utils.js";

const UserAPI = (app) => {
  
  // GET ALL USERS
  app.get('/users', paginateResult(users), (req, res) => {
    res.json(res.paginatedResult);
  });
}

export default UserAPI;