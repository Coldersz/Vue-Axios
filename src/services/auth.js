import Api from "./api";
import String from "@/utils/string";
import bcrypt from "bcryptjs";

export default {
  async register(credentials) {
    try {
      let {name, username, email, password} = credentials;

      const hash = bcrypt.hashSync(password, 10);

      await Api.post("/users", {name, username, email, password: hash});

      return {
        status: "success"
      };
    } catch (err) {
      console.error(err);
    }
  },
  async login(email, password) {
    const credentials = {
      email,
      password
    };
    try {
      const response = await Api.get("/users?email=" + credentials.email);
      const user = response.data[0];
      const validate = await bcrypt.compare(
        credentials.password,
        user.password
      );
      if (validate) {
        let token = String.random(60);

        return {
          status: "success",
          name: user.name,
          username: user.username,
          email: user.email,
          token
        };
      }

      return {
        status: "failed"
      };
    } catch (error) {
      console.log(error);
    }
  },
  logout() {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.removeItem("username");
    } catch (error) {
      console.log(error);
    }
  },

  isLoggedIn() {
    if (
      localStorage.getItem("token") ||
      localStorage.getItem("token") === "undefined"
    ) {
      return true;
    }

    return false;
  }
};
