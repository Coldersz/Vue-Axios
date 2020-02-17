export default {
  random(length = 10) {
    return Math.random()
      .toString(36)
      .slice(length++)
  },
  email(email = 'gmail.com', length = 10) {
    return this.random(length) + '@' + email
  }
}
