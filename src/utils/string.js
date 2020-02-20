export default {
  // eslint-disable-next-line
  random(length = 10) {
    const alpha =
      "abcdefghijklmnopqrstuvwxyZABCDEFGHIJKLMNPOQRSTUVWXYZ0123456789";

    let str = "";
    for (let i = 0; i < length; i++) {
      let rand = Math.floor(Math.random() * alpha.length);
      str += alpha[rand];
    }

    return str;
  },
  email(email = "gmail.com", length = 10) {
    return this.random(length) + "@" + email;
  }
};
