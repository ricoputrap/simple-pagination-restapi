import PostAPI from "./PostAPI.js";
import UserAPI from "./UserAPI.js";

const expressApp = (app) => {
  UserAPI(app);
  PostAPI(app);
}

export default expressApp;