import UserAPI from "./UserAPI.js";

const expressApp = (app) => {
  UserAPI(app);
}

export default expressApp;