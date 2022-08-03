import { users } from "./dummy.js"

const UserAPI = (app) => {
  app.get('/users', (req, res) => {
    res.json(users);
  })
}

export default UserAPI;