import Api from "./api"
import bcrypt from 'bcryptjs'

export default {
    // async addUser(newUser) {
    //     try {
    //       let response = await Api.post("/users", newUser);
    //       this.users = [...this.users, response.data];
    //     } catch (err) {
    //       console.error(err);

    //     }
    //   }
    async register(credentials) {
        try {
            let { name, username, email, password } = credentials;

            const hash = bcrypt.hashSync(password, 10);
            
            await Api.post("/users", {name, username, email, password: hash});
        } catch (err) {
            console.error(err);

        }
    }
}